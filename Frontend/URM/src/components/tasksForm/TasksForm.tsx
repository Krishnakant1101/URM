import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


interface TasksFormProps {
    closeModal: () => void; 
}

const TasksForm: React.FC<TasksFormProps> = ({ closeModal }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const todoData = {
            title,
            description,
            stage: "todo",
        };
        const response = await fetch("http://localhost:1100/api/addTasksData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(todoData),
          });
           console.log(response)
          
        }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                margin: "0 auto",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                backgroundColor: "white",
                marginTop: "170px",
                position: "relative"
            }}
        >


            <Box
                sx={{
                    position: "absolute",
                    right: 14,
                    top: 14,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 27,
                    transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.2)",
                        color: "primary.main",
                    },
                }}
                onClick={closeModal}
            >
                <CloseIcon />
            </Box>

            <Typography variant="h6" textAlign="center" marginTop="26px">
                Create New Task
            </Typography>

            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
            >
                {loading ? "Submitting..." : "SUBMIT"}
            </Button>
        </Box>
    );
};

export default TasksForm;
