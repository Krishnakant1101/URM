import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Popover,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Modal,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useAppSelector, useAppDispatch } from "../../redux/store/store";
import { fetchTasks } from "../../redux/features/TasksSlice";
import TasksForm from "../tasksForm/TasksForm"

const TasksSideBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tasksStage, setTasksStage] = useState<string>("todo");
  const [selectedTask, setSelectedTask] = useState<{ id:string,title: string; description: string; stage: string; flag:string} | null>(null);
  const { tasks, loading, error } = useAppSelector((state) => state.tasksData);
  const [openTaskUpdateForm,setOpenTaskUpdateForm]=useState(false);
  const dispatch = useAppDispatch();
  

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTaskClick = (task: {id:string, title: string; description: string,stage: string, flag:string }) => {
    setSelectedTask(task);
  };

  const handleModalClose = () => {
    setSelectedTask(null);
  };


  
  

  const filteredTasks = tasks.filter((task) => task.stage === tasksStage);

  const open = Boolean(anchorEl);
  const id = open ? "filter-popover" : undefined;

  return (
    <Box
      sx={{
        width: "96%",
        backgroundColor: "#fff",
        height: "92%",
        mt: 3,
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        p: 3,
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "black",
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.6)",
            borderRadius: "8px",
            paddingLeft: "6px",
            paddingRight: "6px",
            backgroundColor: "#e3e3e1",
          }}
        >
          {tasksStage.toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="outlined" size="small" sx={{ textTransform: "none" }}>
            View All
          </Button>
          <FilterListIcon
            sx={{
              fontSize: "30px",
              transition: "color 0.3s, transform 0.3s",
              "&:hover": {
                cursor: "pointer",
                color: "#1976d2",
                transform: "scale(1.2)",
              },
            }}
            onClick={handleFilterClick}
          />
        </Box>
      </Box>

      {/* Tasks Vertical Stepper */}
      <Box
        sx={{
          position: "relative",
          pl: 5,
          pt: 5,
          maxHeight: 450,
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {loading ? (
          <Typography align="center" variant="body1" sx={{ color: "#888" }}>
            Loading tasks...
          </Typography>
        ) : error ? (
          <Typography align="center" color="error" variant="body1">
            Error: {error}
          </Typography>
        ) : filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Box
              key={task.id}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                mb: index === filteredTasks.length - 1 ? 0 : 6,
                transition: "box-shadow 0.3s, transform 0.3s",
                "&:hover": {
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.02)",
                },
                cursor: "pointer",
              }}
              onClick={() => handleTaskClick({ id:task.id, title: task.title, description: task.description, stage:task.stage, flag:task.flag})}
            >

               {/* Connecting Line */}
               {index < filteredTasks.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    width: "1px",
                    height: "75px",
                    background: "linear-gradient(180deg, #1976d2, #64b5f6)",
                    animation: "fade-in 0.5s ease-in-out",
                  }}
                />
              )}

              {/* Flag Icon */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "2px solid rgb(240, 34, 34)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  mr: 2,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <img
                  src={
                    task.flag === "redFlag"
                      ? "https://cdn-icons-png.flaticon.com/128/395/395841.png"
                      : task.flag === "yellowFlag"
                      ? "https://cdn-icons-png.flaticon.com/128/5524/5524562.png"
                      : "https://cdn-icons-png.flaticon.com/128/11059/11059866.png"
                  }
                  alt={`${task.flag} Flag`}

                  style={{ width: "25px" }}
                />
              </Box>
              {/* Task Title */}
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "300px",
                }}
              >
                {task.title}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography align="center" variant="body1" sx={{ color: "#888" }}>
            No tasks found for this stage.
          </Typography>
        )}
      </Box>

      {/* Popover for Filters */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ p: 1, width: 200 }}>
          <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
            Filter by :
          </Typography>
          <MenuItem
            onClick={() => {
              setTasksStage("todo");
              handleClose();
            }}
          >
            To Do
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTasksStage("in-progress");
              handleClose();
            }}
          >
            In Progress
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTasksStage("complete");
              handleClose();
            }}
          >
            Completed
          </MenuItem>
        </Box>
      </Popover> 

      {/* Dialog for Task Details */}
      <Dialog open={Boolean(selectedTask)} onClose={handleModalClose} fullWidth maxWidth="sm">
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <DialogTitle
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <Box  onClick={()=>{
        setOpenTaskUpdateForm(true)
      }} sx={{ ml: 1, mr: 2,
         "&:hover": {
          transform: "scale(1.2)",
          cursor:"pointer"
        },
      }}>
        <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" height="20px" />
      </Box>
      <Box sx={{ fontFamily: "fantasy" }}>{selectedTask?.title}</Box>
      <Box sx={{ ml: 2, "&:hover": {
          transform: "scale(1.2)",
          cursor:"pointer"
        },}}>
        <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" height="20px" />
      </Box>
    </DialogTitle>
    <Divider />
    <DialogContent
      sx={{
        flex: 1, // Ensures the content takes up the remaining space
        overflowY: "auto",
        paddingBottom: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          lineHeight: 1.6,
          marginTop: 2,
          fontFamily: "monospace",
          whiteSpace: "pre-wrap", // Handles line breaks
        }}
      >
        {selectedTask?.description}
      </Typography>
    </DialogContent>
    <DialogActions
      sx={{
        justifyContent: "center",
        padding: 2,
        mt: "auto", // Pushes this section to the bottom
      }}
    >
      <Button onClick={handleModalClose} variant="contained" color="primary">
        Close
      </Button>
    </DialogActions>
  </Box>
</Dialog>


{/* Update form modal */}
<Modal open={openTaskUpdateForm} onClose={()=>{
  setOpenTaskUpdateForm(false)
}}>
<TasksForm 
  closeModal={() => {
    setOpenTaskUpdateForm(false);
    dispatch(fetchTasks()); // Refresh tasks after update
  }} 
  idProps={selectedTask?.id}
  titleProp={selectedTask?.title} 
  descriptionProp={selectedTask?.description} 
  flagProp={selectedTask?.flag} 
  stageProp={selectedTask?.stage} 
  formTitle={"Edit"} 
/>

</Modal>
      
    </Box>
  );
};

export default TasksSideBar; 

