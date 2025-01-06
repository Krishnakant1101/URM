import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Task Interface
interface Task {
  id?: string; // Optional since Firebase assigns the ID
  title: string;
  description: string;
  stage: string;
}

// Tasks State Interface
interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

// Custom Error Interface for API responses
interface ApiError {
  message: string; // Error message from API
}

// Initial State
const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

// Helper function for extracting error messages
const getErrorMessage = (error: AxiosError): string => {
  if (error.response?.data) {
    const errorData = error.response.data as { error: string };
    return errorData.error || "Something went wrong!";
  }
  return "Something went wrong!";
};

// Async Thunk to Fetch All Tasks
export const fetchTasks = createAsyncThunk<Task[], void, { rejectValue: ApiError }>(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/getAllTasksData");
      return response.data; // Assuming the API returns an array of tasks
    } catch (error) {
      const message = getErrorMessage(error as AxiosError);
      return rejectWithValue({ message });
    }
  }
);

// Async Thunk to Add Task Data
export const addTask = createAsyncThunk<Task, Task, { rejectValue: ApiError }>(
  "tasks/addTask",
  async (newTask: Task, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/addTasksData", newTask);
      return { ...newTask, id: response.data.id }; // Firebase returns the document ID
    } catch (error) {
      const message = getErrorMessage(error as AxiosError);
      return rejectWithValue({ message });
    }
  }
);

// Tasks Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Tasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch tasks";
      })
      // Add Task
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
        state.loading = false;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add task";
      });
  },
});

export default tasksSlice.reducer;
