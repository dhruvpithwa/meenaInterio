
import { useState } from "react";
import { Box, Button, Grid, MobileStepper, Typography, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { ProjectCard } from "../common/projectCard";
import SwipeableViews from "react-swipeable-views";

export const Projects = () => {

    const { projects } = useSelector(state => state.projectState);

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const steps = Object.keys(projects).length ?? 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % steps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    
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
                    width: "60%", // Adjust this for partial underline width
                    height: "2.5px", // Thickness of the underline
                    backgroundColor: "#fdb73e", // Color of the underline
                    bottom: 0,
                    left: "40%", // Center the underline
                    },
                }}
                >
                <Typography variant="h4" gutterBottom color={"#063970"}>
                    Projects
                </Typography>
            </Box>
            

            <br></br>
            <br></br>

            <Grid container>
                <Grid item  sm={7} md={8} lg={9}>&nbsp;</Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <MobileStepper
                        sx={{
                            width: 'auto',
                            background: 'transparent',
                        }}
                        steps={steps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="large"
                                onClick={handleNext}
                                disabled={activeStep === steps - 1}
                            >
                                Next  
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                size="large"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                            >
                                
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Previous
                            </Button>
                        }
                /> 
                </Grid>
            </Grid>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {Object.keys(projects).map((projectKey, index) => (
                    <div key={index}>
                        <br></br>
                        <ProjectCard project={projects[projectKey]} />
                        <br></br>
                    </div>
                ))}
            </SwipeableViews>
        </Box>
    )
}