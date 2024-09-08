import { useState } from 'react';
import { Divider, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ProjectCard } from '../../common/projectCard';


export const ShowProject = () => {

    const [searchParams] = useSearchParams();
    const projectId = searchParams.get('id');

    const { projects } = useSelector(state => state.projectState);
    const project = projects[projectId];

    return (
        <>
            <Typography variant="h5">Show Project</Typography>
            <br></br>
            <Divider />
            <br></br>

            {project &&
                <ProjectCard project={project}/>
            }
        </>
    );
}
