import { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, MobileStepper, Typography, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';


export const ProjectCard = (props) => {

    const project = props.project;
    const { assets, description, name, location } = project ?? {};

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = project?.assets.length ?? 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"

        >
            <Grid item xs={12} md={10}>

                <Card p={2} variant="elevation" sx={{ background: "transparent" }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7} >

                                <Typography component="div" variant="h5" mb={1} color={"#063970"}>
                                    {name}
                                </Typography>
                                <Typography variant="subtitle1" color={"#fdb73e"} component="div">
                                    <b>{location}</b>
                                </Typography>
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
                            <Grid item xs={12} md={4} my={2} mx={1}>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {assets.map((asset, index) => (
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
                                                objectFit: 'cover',
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
                        </Grid>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}