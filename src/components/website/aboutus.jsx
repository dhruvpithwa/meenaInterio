
import { Box, Grid, Typography } from "@mui/material";

export const AboutUs = () => {
    
    return (
        <Box 
            id="aboutus"
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
                    About Us
                </Typography>
            </Box>
            

            <br></br>
            <br></br>

            <Grid container spacing={2} justifyContent={"center"} >
                <Grid item xs={12} sm={10}>
                    <Typography variant="h6" sx={{ textAlign: 'justify'}} fontSize={18}>
                        Welcome to Meena Interio! Since 2007, we have been dedicated to transforming spaces with our unique approach to interior design. Our expertise lies in creating eco-friendly, light-weight, and spacious designs that cater to your needs and lifestyle. With over 80+ satisfied customers, our track record speaks for itself. We take pride in our personalized service, attention to detail, and commitment to excellence. Let us help you turn your vision into reality and create a space you'll love.
                    </Typography>
                    <br></br>
                    <Typography variant="h6" sx={{ textAlign: 'justify'}} fontSize={18}>
                        At Meena Interio, we believe in using the best materials while ensuring that our solutions are cost-effective. Our goal is to provide you with a beautiful, functional, and sustainable space without breaking the bank.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}