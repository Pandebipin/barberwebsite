import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./BlogpostSlice";

const store = configureStore({
  reducer: {
    blog: blogsReducer,
  },
});
export default store;
