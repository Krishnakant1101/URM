import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import VideoSlider from './components/trendsCard/TrendsCard';
import Header from './components/Header/Header'
const App: React.FC = () => {
  return (
    <>
    <Header/>
      <CssBaseline />
      <Container>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Video Slider</h1>
        
      </Container>
    </>
  );
};

export default App;
