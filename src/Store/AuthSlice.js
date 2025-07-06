import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    CheckAuth: (state, action) => {
      // console.log("auth", action.payload);
      state.isAuth = action.payload;
    },
    Logout: (state, action) => {
      state.isAuth = false;
    },
  },
});

export const { CheckAuth } = AuthSlice.actions;
export const { Logout } = AuthSlice.actions;
export default AuthSlice.reducer;
