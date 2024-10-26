// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import BlogpostSlice from "./BlogpostSlice"; // Adjust the path as needed

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, BlogpostSlice);

const store = configureStore({
  reducer: {
    blog: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // ignore persist action
        ignoredPaths: ["register"], // ignore register path
      },
    }),
});

export const persistor = persistStore(store);
export default store;
