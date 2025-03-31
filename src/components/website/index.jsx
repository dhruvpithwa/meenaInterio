
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/projects";
import { Projects } from "./projects";
import { Services } from "./services";
import { Home } from "./home";
import { Loader} from '../common/loader';
import { LoaderState } from "../../enums/loader";

export const WebApp = () => {
    const dispatch = useDispatch();
    const { loadingState } = useSelector(state => state.applicationState);

    useEffect(()=> {
        dispatch(fetchProjects());
    }, []);

    return (
        <div >
            <Loader isLoading={loadingState === LoaderState.START}/>   
            <Home />
            <Services />
            <Projects />
        </div>
    );
}