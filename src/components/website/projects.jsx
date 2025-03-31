import { Box, Typography,  useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { ProjectCard } from "./projectCard";
import  CardCarousel from "../common/carousal";

export const Projects = () => {
    const theme = useTheme();
    const { projects } = useSelector(state => state.projectState);

    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

    let cardsToShow = 4;
    if (isXs) cardsToShow = 1;
    else if (isSm) cardsToShow = 2;
    
    return (
        <Box 
            id="projects"
            component={"section"} 
            sx={{
                p: 3
            }}
        >            
            <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "60%",
                    height: "2.5px",
                    backgroundColor: "#fdb73e",
                    bottom: 0,
                    left: "40%",
                    },
                }}
            >
                <Typography variant="h4" gutterBottom color={"#063970"}>
                    Projects
                </Typography>
            </Box>

            <br></br>
            <br></br>

            <CardCarousel cardsToShow={cardsToShow}>
                {Object.keys(projects).filter(key => projects[key].assets.length > 0).map((key) => (
                    <ProjectCard project={projects[key]} />
                ))}
            </CardCarousel>
        </Box>
    )
}