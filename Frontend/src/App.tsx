import React, { useRef } from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import FeaturesCard from './components/featuresCard/FeaturesCard';
import Header from './components/Header/Header';
import LatestBlogsCard from './components/latestBlogsCard/LatestBlogsCard';
import UserTable from './components/userTable/UserTable';
import Footer from './components/footer/Footer';
import UserDataForm from './components/userDataForm/UserDataForm';
import TasksForm from './components/tasksForm/TasksForm'
import TasksSideBar from './components/tasksSideBar/TasksSideBar';


const groupsIcon = () => (
  <img src='https://cdn-icons-png.flaticon.com/128/681/681494.png' height="55px" />
);
const tasksIcon = () => (
  <img src='https://cdn-icons-png.flaticon.com/128/10888/10888338.png' height="55px" />
);
const activityIcon = () => (
  <img src='https://cdn-icons-png.flaticon.com/128/16116/16116730.png' height="55px" />
);
const historyIcon = () => (
  <img src='https://cdn-icons-png.flaticon.com/128/5582/5582302.png' height="55px" />
);
const createButtonIcon = () => (
  <img src='https://cdn-icons-png.flaticon.com/128/10023/10023858.png' height="35px" />
);


const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollFunction = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      <CssBaseline /> {/* Ensures consistent baseline CSS */}
      {/* Header */}
      <Header />



      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="User List"
                description="click the view button"
                IconComponent={groupsIcon}
                createButtonIcon={createButtonIcon}
                scrollFunction={scrollFunction}
                UserDataForm={UserDataForm}
                onButtonClick={() => alert("Button clicked!")}
              /></Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="Tasks "
                description="click the view button"
                IconComponent={tasksIcon}
                createButtonIcon={createButtonIcon}
                scrollFunction={scrollFunction}
                TasksForm={TasksForm}
                onButtonClick={() => alert("Button clicked!")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="Activity"
                description="click the view button"
                scrollFunction={scrollFunction}
                IconComponent={activityIcon}
                onButtonClick={() => alert("Button clicked!")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="History"
                description="click the view button"
                scrollFunction={scrollFunction}
                IconComponent={historyIcon} 
                onButtonClick={() => alert("Button clicked!")}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Box m={2}>
          <LatestBlogsCard /></Box>
        <Box m={2}>
          <LatestBlogsCard />
        </Box>
        <Box m={2}>
          <LatestBlogsCard />
        </Box>
      </Box>

<Box ref={aboutRef} sx={{display:"flex",justifyContent:"center"}}>
<UserTable />
<TasksSideBar/>
</Box>
      
     
      <Footer />

     


    </>
  );
};

export default App;
