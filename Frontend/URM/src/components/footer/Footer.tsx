import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4,
        mt: 4,
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company committed to delivering high-quality services to our clients. Our mission is to provide innovative solutions for businesses worldwide.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  About
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Column 3: Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                color="inherit"
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                color="inherit"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: 4 }}>
          
          <Typography variant="body2" sx={{ mt: 2 }}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
