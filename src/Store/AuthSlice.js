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
  },
});

export const { CheckAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
