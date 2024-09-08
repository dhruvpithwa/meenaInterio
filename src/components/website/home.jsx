
import { Box, Grid, Typography } from "@mui/material";

export const Home = () => {
    return (
        <Box 
            id="home"
            component={"section"} 
            sx={{
                p: 3,
                mt: 2
            }}
        >
            
            
            <Grid container spacing={2} justifyContent={"center"} >
                <Grid item xs={12} sm={5} md={4}>
                    <Typography variant="h2" color={"#fdb73e"}>Meena Interio</Typography>
                    <Typography variant="h5" color={"#063970"}>Innovative Designs, Timeless Elegance</Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>    
                    <Box
                        component="img"
                        src="https://firebasestorage.googleapis.com/v0/b/pithub-a6f81.appspot.com/o/uploads%2Fbanner.gif?alt=media&token=7a516602-514b-4fc0-8b25-e29c25654215"
                        alt={"banner-image"}
                        sx={{
                            borderRadius: '10%',
                            width: '100%',     
                            height: 'auto',    
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                
                
            </Grid>
        </Box>
    )
}