import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, WhatsApp, Home, Email, Phone } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box
      id="contactus"
      component="footer"
      sx={{
        backgroundColor: "#063970",
        color: "#ffffff",
        p: 3,
        mt: 8
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >

      <Grid container spacing={4}>

        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom color={"#fdb73e"}>
            Contact Us
          </Typography>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Typography mb={2} color={"inherit"}>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                  <Home />
                </span>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                  Kandivali (W), Mumbai - 400067
                </span>
              </Typography>
              <Typography mb={2} color={"inherit"}>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                    <Email />
                </span>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                  prakashnpithwa@gmail.com
                </span>
              </Typography>
              <Typography mb={2} color={"inherit"}>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                  <Phone />
                </span>
                <span style={{verticalAlign: "top", margin: '2px 5px'}}>
                  +91 98217 59500
                </span>
              </Typography>

            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  title="Meena Interio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.351788579977!2d72.80838193020841!3d19.20965539942389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c71e00b21f%3A0xfa74b1f57d575513!2sKandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725772509131!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: "2px"
                  }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>

            </Grid>
          </Grid>
        </Grid>

        <Grid item md={3}>
          &nbsp;
        </Grid>


        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom color={"#fdb73e"}>
            Send Us Enquiry
          </Typography>
          <br></br>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Your Name"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Your Mobile"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Query"
                variant="filled"
                fullWidth
                multiline
                rows={2}
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>

          <br></br>
          
          <br></br>
          <Typography variant="h6" gutterBottom color={"#fdb73e"}>
            Follow Us
          </Typography>
          <IconButton href="https://www.facebook.com/" color="inherit" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton href="https://wa.me/919821759500" color="inherit" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton href="https://www.instagram.com/" color="inherit" target="_blank">
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>

      <Box
        textAlign="center"
        sx={{ mt: 4, pt: 3, borderTop: "1px solid #fdb73e" }}
      >
        <Typography variant="body2" >
          &copy; {new Date().getFullYear()} Meena Interio. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
}
