import { createSlice } from "@reduxjs/toolkit";

// AUTH SLICE
const initialAuthState = {
  isAuthenticated: false,
};

// reducers
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
