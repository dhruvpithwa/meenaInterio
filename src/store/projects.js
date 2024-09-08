
import { createSlice } from '@reduxjs/toolkit';
import { addProject, editProject, deleteFile, getProjects, uploadFile } from "../services/firebase";
import { setNotification, startLoading, stopLoading } from "./application"

const initialState = {
    projects: {}
};
const reducers = {
    setProjects(state, action) {
        state.projects = action.payload;
    }
}

const projectSlice = createSlice({
    name: 'projectState',
    initialState: initialState,
    reducers: reducers
});

const { setProjects } = projectSlice.actions;

export default projectSlice;




export const uploadAsset = (file) => {
    return async (dispatch) => {
        try{
            dispatch(startLoading());
            const url = await uploadFile(file);
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'success', message: 'Asset upload successfully'}));
            return url;
        }
        catch(error){
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'error', message: 'Something went wrong, please try again!'}));
        }
    }
}

export const deleteAsset = (url) => {
    return async (dispatch) => {
        try{
            dispatch(startLoading());
            await deleteFile(url);
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'success', message: 'Asset deleted successfully'}));
        }
        catch(error){
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'error', message: 'Something went wrong, please try again!'}));
        }
    }
}

export const createProject = (payload) => {
    return async (dispatch) => {
        try{
            dispatch(startLoading());
            await addProject(payload);
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'success', message: 'Project created successfully'}));
        }
        catch(error){
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'error', message: 'Something went wrong, please try again!'}));
        }
    }
}

export const updateProject = (projectId, payload) => {
    return async (dispatch) => {
        try{
            dispatch(startLoading());
            await editProject(projectId, payload);
            await dispatch(fetchProjects());
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'success', message: 'Project updated successfully'}));
        }
        catch(error){
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'error', message: 'Something went wrong, please try again!'}));
        }
    }
}

export const fetchProjects = () => {
    return async(dispatch) => {
        try{
            dispatch(startLoading());
            const projects = await getProjects();
            dispatch(setProjects(projects));
            dispatch(stopLoading());
        }
        catch(error){
            console.log(error);
            dispatch(stopLoading());
            dispatch(setNotification({ open: true, severity: 'error', message: 'Something went wrong, please try again!'}));
        }
    }
}