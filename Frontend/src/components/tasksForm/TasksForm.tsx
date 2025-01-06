import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { addTask } from "../../redux/features/TasksSlice";

interface TaskFormProps {
  closeModal: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("todo");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !stage) {
      alert("All fields are required");
      return;
    }

    const newTask = { title, description, stage };

    try {
      closeModal();
      await dispatch(addTask(newTask)).unwrap();
      setTitle("");
      setDescription("");
      setStage("");
    
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Error adding task. Please try again.");
    }
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button
          onClick={closeModal}
          style={closeButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2 style={headerStyle}>Add New Task</h2>
          <div style={fieldContainer}>
            <label style={labelStyle}>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={fieldContainer}>
            <label style={labelStyle}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={textareaStyle}
            />
          </div>
     
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const modalStyle: React.CSSProperties = {
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
};

const modalContentStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "8px",
  width: "400px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

const formStyle: React.CSSProperties = {
  margin: "0",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
};

const fieldContainer: React.CSSProperties = {
  marginBottom: "15px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  height: "80px",
  resize: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default TaskForm;
