import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  salary: string;
  department: string;
}

interface UserDataState {
  users: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: UserDataState = {
  users: [],
  loading: false,
  error: null,
};

// Add user thunk
export const addUser = createAsyncThunk(
  'userData/addUser',
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/addUserData", userData);
      return { ...userData, id: response.data.id };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add user');
    }
  }
);

// Fetch all users thunk
export const getUsers = createAsyncThunk(
  'userData/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<UserData[]>("http://localhost:3000/api/getUsersData");
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
    }
  }
);

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Reducer to handle manual user data update
    updateUserData(state, action: PayloadAction<UserData>) {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      } else {
        state.users.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Add user cases
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch users cases
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { updateUserData } = userDataSlice.actions;

// Export reducer
export default userDataSlice.reducer;
