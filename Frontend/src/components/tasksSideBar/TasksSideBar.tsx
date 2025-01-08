import React from "react";
import { Box, Paper, Typography,Button } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

const TasksSideBar: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width:"96%" ,
        backgroundColor:"#f5f5fa",
        height:"92%",
        mt:3,
        boxShadow:
              "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)",
        p: 2 
      }}
    >
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h5">
        Tasks 
      </Typography>
       <Box sx={{display:"flex",alignItems:"center",gap:3}}>
      <Button variant="text">
       View All
      </Button>
      <FilterListIcon sx={{fontSize:"30px"}}/>
      </Box>
      </Box> 
   
     
    </Box>
  );
};

export default TasksSideBar;
