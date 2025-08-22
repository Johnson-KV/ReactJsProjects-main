// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types for dispatch & state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
