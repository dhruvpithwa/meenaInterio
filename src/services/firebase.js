import { ref, deleteObject, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, doc, getDocs, setDoc, updateDoc  } from "@firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from "../firebase-config";

export const uploadFile = async (file) => {
    try {
        const storageRef = ref(storage, 'uploads/' + file.name);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error('Upload failed:', error);
    }
}

export const deleteFile = async (downloadUrl) => {
    try {
        const filePath = extractPathFromUrl(downloadUrl);
        const fileRef = ref(storage, filePath);
        await deleteObject(fileRef);

    } catch (error) {
        console.error('Deletion failed:', error);
    }
}

export const addProject = async (payload) => {
    try{
        await setDoc(doc(db, 'projects', uuidv4()), payload );
    }
    catch(error){
        console.error('Project creation failed', error);
    }
}

export const editProject = async (projectId, payload) => {
    try{

        console.log(projectId, payload);

        await updateDoc(doc(db, 'projects', projectId), payload);
    }
    catch(error){
        console.error('Project updation failed', error);
    }
}

export const getProjects = async () => {
    try {
        const projects = {};
        const docSnap = await getDocs(collection(db, "projects"));
        docSnap.forEach((doc) => {
            projects[doc.id] = doc.data();
        });
        return projects;
    }
    catch(error){
        console.error('Project fetch failed', error);
    }
}

const extractPathFromUrl = (url) => {
    const regex = /\/o\/(.*?)\?/;
    const match = url.match(regex);
    if (match && match[1]) {
        return decodeURIComponent(match[1]);
    } else {
        throw new Error("Invalid download URL");
    }
}

