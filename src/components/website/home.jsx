import CardCarousel from "../common/carousal";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

export const Home = () => {
    const { projects } = useSelector(state => state.projectState);

    return (
        <Box
            id="home"
            component={"section"}
            p={3}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} p={2}>
                    <Box>
                        <Typography variant="h2" color={"#fdb73e"}>Meena Interio</Typography>
                        <Typography variant="h6" color={"#063970"}>Innovative Designs, Timeless Elegance</Typography>
                    </Box>
                    <br></br>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ textAlign: 'justify' }} fontSize={18}>
                                Welcome to Meena Interio! Since 2007, we have been dedicated to transforming spaces with our unique approach to interior design. Our expertise lies in creating eco-friendly, light-weight, and spacious designs that cater to your needs and lifestyle. With over 80+ satisfied customers, our track record speaks for itself. We take pride in our personalized service, attention to detail, and commitment to excellence. Let us help you turn your vision into reality and create a space you'll love.
                            </Typography>
                            <br></br>
                            <Typography variant="h6" sx={{ textAlign: 'justify' }} fontSize={18}>
                                At Meena Interio, we believe in using the best materials while ensuring that our solutions are cost-effective. Our goal is to provide you with a beautiful, functional, and sustainable space without breaking the bank.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} justifyContent={'center'} alignContent={'center'}>
                    <CardCarousel cardsToShow={1} interval={3000} >
                        {Object.keys(projects).map((projectKey) => (
                            <Box
                                component="img"
                                src={projects[projectKey].assets[0].url}
                                alt={"banner-image"}
                                sx={{
                                    borderRadius: '10px',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        ))}
                    </CardCarousel>
                </Grid>
            </Grid>
        </Box>
    )
}