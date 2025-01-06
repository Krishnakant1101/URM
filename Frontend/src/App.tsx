import React from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import FeaturesCard from './components/featuresCard/FeaturesCard';
import Header from './components/Header/Header';
import LatestBlogsCard from './components/latestBlogsCard/LatestBlogsCard';
import UserTable from './components/userTable/UserTable';
import Footer from './components/footer/Footer';
import UserDataForm from './components/userDataForm/UserDataForm';
import TasksForm from './components/tasksForm/TasksForm'

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
                UserDataForm={UserDataForm}
                onButtonClick={() => alert("Button clicked!")}
              /></Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="Tasks "
                description="click the view button"
                IconComponent={tasksIcon}
                createButtonIcon={createButtonIcon}
                TasksForm={TasksForm}
                onButtonClick={() => alert("Button clicked!")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="Activity"
                description="click the view button"
                IconComponent={activityIcon}
                onButtonClick={() => alert("Button clicked!")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeaturesCard
                title="History"
                description="click the view button"
                IconComponent={historyIcon} // Passing the icon directly
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

      <UserTable /><br /><br />
      <Footer />


    </>
  );
};

export default App;
