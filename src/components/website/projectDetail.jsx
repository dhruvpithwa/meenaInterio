
import { useState } from "react";
import { useSelector } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button, Grid, MobileStepper, Typography, useTheme } from '@mui/material';

export const ProjectDetail = ({ projectId }) => {
    const theme = useTheme();
    const { projects } = useSelector(state => state.projectState);
    const { assets, description, name, location } = projects[projectId];
    const [activeStep, setActiveStep] = useState(0);

    const maxSteps = assets?.length ?? 0;
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleStepChange = (step) => setActiveStep(step);

    return (
        <Box
            id="home"
            component={"section"}
            sx={{
                p: 3
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {assets?.map((asset, index) => (
                            <Box
                                key={`asset_${index}`}
                                component={assets[activeStep].type === 'image' ? 'img' : 'video'}
                                autoPlay
                                muted
                                loop
                                sx={{
                                    width: '100%',
                                    height: 320,
                                    overflow: 'hidden',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                }}
                                src={asset.url}
                                alt={'project-asset'}
                            />
                        ))}
                    </SwipeableViews>

                    <MobileStepper
                        sx={{
                            width: '100%',
                            background: 'transparent'
                        }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="large"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >

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

                            </Button>
                        }
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h6">{location}</Typography>
                    <br></br>
                    {
                        Object.keys(description).map((descriptionKey) => {
                            return (
                                <Typography variant="body1" component="div" mb={2} key={descriptionKey}>
                                    {description[descriptionKey]}
                                </Typography>
                            );
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    );
}