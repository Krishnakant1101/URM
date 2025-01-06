import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(0px)', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  position: 'sticky',
  top: 0,
  height: '70px',
  zIndex: theme.zIndex.appBar,
}));

const Header: React.FC = () => {
  return (
    <GlassAppBar>
      <Toolbar>
        {/* Left Section: Home Icon */}
        <Box display="flex" alignItems="center"  flexGrow={1}>
          <HomeIcon sx={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} />
          <Typography 
            variant="h6" 
            sx={{ marginLeft: '10px', color: 'black', fontWeight: 'bold', cursor: 'pointer' }}
          >
            URM
          </Typography>
        </Box>

        {/* Center Section: Search Field */}
        <Box flexGrow={2} display="flex" justifyContent="end">
          <TextField
            id="search-bar"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ width: '30%', marginRight:"20px"}}
          />
        </Box>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <AccountCircleIcon sx={{ color: 'black', fontSize: '30px', cursor: 'pointer' }} />
          <SettingsIcon sx={{ color: 'black', fontSize: '30px', cursor: 'pointer' }} />
          <NotificationsIcon sx={{ color: 'black', fontSize: '30px', cursor: 'pointer' }} />
        </Box>
      </Toolbar>
    </GlassAppBar>
    
  );
};

export default Header;
