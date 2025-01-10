import React, { useState,useEffect } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { addTask } from "../../redux/features/TasksSlice";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { editTask,fetchTasks } from "../../redux/features/TasksSlice";

interface TaskFormProps {
  closeModal?: () => void;
  titleProp?:string,
  formTitle?:string,
  descriptionProp?: string;
  stageProp?: string;
  flagProp?: string;
  idProps?:string;

}

interface NewTask {
  id?:string,
  title?: string;
  description?: string;
  stage?: string;
  flag?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ closeModal, idProps, titleProp, stageProp, descriptionProp, flagProp, formTitle }) => {const TaskForm: React.FC<TaskFormProps> = ({ closeModal, idProps, titleProp, stageProp, descriptionProp, flagProp, formTitle }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(titleProp);
  const [description, setDescription] = useState(descriptionProp);
  const [stage, setStage] = useState(stageProp || "todo"); // Use initial value directly
  const [selectedFlag, setSelectedFlag] = useState<string>(flagProp || ""); // Default to empty if undefined

  const flags = [
    {
      value: "redFlag",
      src: "https://cdn-icons-png.flaticon.com/128/395/395841.png",
      label: "Red Flag",
    },
    {
      value: "yellowFlag",
      src: "https://cdn-icons-png.flaticon.com/128/5524/5524562.png",
      label: "Yellow Flag",
    },
    {
      value: "blueFlag",
      src: "https://cdn-icons-png.flaticon.com/128/11059/11059866.png",
      label: "Blue Flag",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !stage || !selectedFlag) {
      alert("All fields are required");
      return;
    }

    try {
      const task: NewTask = { id: idProps, title, description, stage, flag: selectedFlag };

      if (formTitle === "Edit") {
        await dispatch(editTask(task)).unwrap();
      } else {
        await dispatch(addTask(task)).unwrap();
      }

      setTitle("");
      setDescription("");
      setStage("todo");
      setSelectedFlag("");
      closeModal();
    } catch (error) {
      console.error(`Failed to ${formTitle.toLowerCase()} task:`, error);
    }
  };

  const handleFlagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFlag(event.target.value);
  };

  return (
    <Box sx={styles.modal}>
      <Box sx={styles.modalContent}>
        <Button onClick={closeModal} sx={styles.closeButton}>
          &times;
        </Button>
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, color: "black" }}>
          {formTitle} Task
        </Typography>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Title:</label>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={styles.input}
          />
          <label>Description:</label>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            required
            sx={styles.input}
          />
          <label>Flag:</label>
          <TextField
            select
            value={selectedFlag}
            onChange={handleFlagChange}
            fullWidth
            required
            SelectProps={{
              renderValue: (value) => {
                const selected = flags.find((flag) => flag.value === value);
                return selected ? (
                  <Box sx={styles.flagOption}>
                    <img
                      src={selected.src}
                      alt={selected.label}
                      style={{ width: 24, height: 24, borderRadius: "50%" }}
                    />
                    {selected.label}
                  </Box>
                ) : (
                  "Select a flag"
                );
              },
            }}
            sx={styles.input}
          >
            {flags.map((flag) => (
              <MenuItem key={flag.value} value={flag.value}>
                <Box sx={styles.flagOption}>
                  <img
                    src={flag.src}
                    alt={flag.label}
                    style={{ width: 24, height: 24, borderRadius: "50%" }}
                  />
                  {flag.label}
                </Box>
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={styles.submitButton}>
            {formTitle} Task
          </Button>
        </form>
      </Box>
    </Box>
  );
};

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(titleProp);
  const [description, setDescription] = useState(descriptionProp);
  const [stage, setStage] = useState(stageProp || "todo"); // Use initial value directly
  const [selectedFlag, setSelectedFlag] = useState<string>(flagProp || ""); // Default to empty if undefined

  const flags = [
    {
      value: "redFlag",
      src: "https://cdn-icons-png.flaticon.com/128/395/395841.png",
      label: "Red Flag",
    },
    {
      value: "yellowFlag",
      src: "https://cdn-icons-png.flaticon.com/128/5524/5524562.png",
      label: "Yellow Flag",
    },
    {
      value: "blueFlag",
      src: "https://cdn-icons-png.flaticon.com/128/11059/11059866.png",
      label: "Blue Flag",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !stage || !selectedFlag) {
      alert("All fields are required");
      return;
    }

    try {
      const task: NewTask = { id: idProps, title, description, stage, flag: selectedFlag };

      if (formTitle === "Edit") {
        await dispatch(editTask(task)).unwrap();
      } else {
        await dispatch(addTask(task)).unwrap();
      }

      setTitle("");
      setDescription("");
      setStage("todo");
      setSelectedFlag("");
      closeModal();
    } catch (error) {
      console.error(`Failed to ${formTitle.toLowerCase()} task:`, error);
    }
  };

  const handleFlagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFlag(event.target.value);
  };

  return (
    <Box sx={styles.modal}>
      <Box sx={styles.modalContent}>
        <Button onClick={closeModal} sx={styles.closeButton}>
          &times;
        </Button>
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, color: "black" }}>
          {formTitle} Task
        </Typography>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Title:</label>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={styles.input}
          />
          <label>Description:</label>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            required
            sx={styles.input}
          />
          <label>Flag:</label>
          <TextField
            select
            value={selectedFlag}
            onChange={handleFlagChange}
            fullWidth
            required
            SelectProps={{
              renderValue: (value) => {
                const selected = flags.find((flag) => flag.value === value);
                return selected ? (
                  <Box sx={styles.flagOption}>
                    <img
                      src={selected.src}
                      alt={selected.label}
                      style={{ width: 24, height: 24, borderRadius: "50%" }}
                    />
                    {selected.label}
                  </Box>
                ) : (
                  "Select a flag"
                );
              },
            }}
            sx={styles.input}
          >
            {flags.map((flag) => (
              <MenuItem key={flag.value} value={flag.value}>
                <Box sx={styles.flagOption}>
                  <img
                    src={flag.src}
                    alt={flag.label}
                    style={{ width: 24, height: 24, borderRadius: "50%" }}
                  />
                  {flag.label}
                </Box>
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={styles.submitButton}>
            {formTitle} Task
          </Button>
        </form>
      </Box>
    </Box>
  );
};

// Styles
const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: (formTitle: string) => ({
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "8px",
    paddingBottom: "16px",
    width: formTitle !== "Edit" ? "500px" : "400px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }),
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#000",
    background: "none",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  input: {
    marginBottom: "16px",
    maxHeight: 150,
    overflowY: "auto"
  },
  submitButton: {
    marginTop: 2,
  },
  flagOption: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
};



export default TaskForm;



/*
const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: (formTitle: string) => ({
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "8px",
    width: formTitle === "edit" ? "600px" : "400px", // Conditional width
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }),
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#000",
    background: "none",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  input: {
    marginBottom: 2,
  },
  submitButton: {
    marginTop: 2,
  },
  flagOption: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
};

*/