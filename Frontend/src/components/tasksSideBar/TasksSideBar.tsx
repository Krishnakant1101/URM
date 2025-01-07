import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const TasksSideBar: React.FC = () => {
  return (
    <Grid item xs={12} md={4}>
      <Paper 
        sx={{ 
          p: 3, 
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
          borderRadius: 2 
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "secondary.main",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Additional Information
        </Typography>
        <Typography 
          variant="body1" 
          align="justify" 
          sx={{ color: "text.secondary", lineHeight: 1.6 }}
        >
          This is a placeholder for additional content. You can add details such as user profiles,
          charts, or any other relevant information here.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default TasksSideBar;
