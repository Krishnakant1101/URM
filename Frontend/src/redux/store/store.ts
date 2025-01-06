import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import tasksReducer from "../features/TasksSlice";
import userDataReducer from '../features/UserDataSlice';

// Configure the store
export const store = configureStore({
    reducer: {
        tasksData: tasksReducer,
        usersData: userDataReducer,
    },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for use in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
