
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export const Services = () => {
    
    return (
        <Box 
            id="services"
            component={"section"} 
            sx={{
                p: 3,
                mt: 2
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
                    Services
                </Typography>
            </Box>
            

            <br></br>
            <br></br>

            <Grid container spacing={2} justifyContent="center" >
                <Grid item xs={12} md={4}>
                    <Card variant="elevation" sx={{minHeight: 180, background: "transparent"}}>
                        <CardContent>
                            <Typography variant="h6" mb={1} color={"#fdb73e"}>
                                <b>Comprehensive Design Consultation</b>
                            </Typography>
                            <Typography variant="body2">
                                Personalized consultations to understand your needs and preferences. Development of tailored design concepts and layouts for your space.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="elevation" sx={{minHeight: 180, background: "transparent"}}>
                        <CardContent>
                            <Typography variant="h6" mb={1} color={"#fdb73e"}>
                                <b>Residential and Commercial Design</b>
                            </Typography>
                            <Typography variant="body2">
                                Expert design solutions for homes, offices, retail spaces, and more. Specialized designs for kitchens, bathrooms, living rooms, and bedrooms.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="elevation" sx={{minHeight: 180, background: "transparent"}}>
                        <CardContent>
                            <Typography variant="h6" mb={1} color={"#fdb73e"}>
                                <b>Project Management and Coordination</b>
                            </Typography>
                            <Typography variant="body2">
                                End-to-end project management from concept to completion. Seamless coordination with contractors, architects, and vendors.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="elevation" sx={{minHeight: 180, background: "transparent"}}>
                        <CardContent>
                            <Typography variant="h6" mb={1} color={"#fdb73e"}>
                                <b>Furnishing and Custom Solutions</b>
                            </Typography>
                            <Typography variant="body2">
                                Sourcing and selection of high-quality furniture and decor. Custom furniture design to create unique and personalized spaces.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="elevation" sx={{minHeight: 180, background: "transparent"}}>
                        <CardContent>
                            <Typography variant="h6" mb={1} color={"#fdb73e"}>
                                <b>Sustainable and 3D Visualization</b>
                            </Typography>
                            <Typography variant="body2">
                                Incorporation of eco-friendly materials and sustainable design practices. 3D renderings and virtual walkthroughs to help you visualize the final design.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            

          
            
           
        </Box>
    )
}