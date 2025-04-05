
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/projects";
import { Projects } from "./projects";
import { Services } from "./services";
import { Home } from "./home";
import { Loader} from '../common/loader';
import { LoaderState } from "../../enums/loader";
import { useSearchParams } from "react-router-dom";
import { ProjectDetail } from "./projectDetail";

export const WebApp = () => {
    const dispatch = useDispatch();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const projectId = searchParams.get('id');
    const { loadingState } = useSelector(state => state.applicationState);
    const { projects } = useSelector(state => state.projectState);

    useEffect(()=> {
        if(Object.keys(projects).length === 0){
            dispatch(fetchProjects());
        }
    }, []);

    return (
        <div >
            <Loader isLoading={loadingState === LoaderState.START}/>
            {Object.keys(projects)?.length > 0 ? 
                <>
                    { projectId ? <ProjectDetail projectId={projectId} /> : <Home />  }
                    <Projects />
                    <Services />
                </> 
            : <></>}
        </div>
    );
}
