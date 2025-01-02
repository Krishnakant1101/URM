import React from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import VideoSlider from './components/trendsCard/TrendsCard';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline /> {/* Ensures consistent baseline CSS */}
      <Header />
      
      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* Create a responsive grid layout for the video sliders */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <VideoSlider />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <VideoSlider />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <VideoSlider />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <VideoSlider />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
