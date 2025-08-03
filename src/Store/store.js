// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import BlogpostSlice from "./BlogpostSlice";
import UserdataSlice from "./UserdataSlice";
import DataSlice from "./DataSlice";
import AuthSliceReducer from "./AuthSlice";
import RewardSlice from "./RewardSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, BlogpostSlice);

const store = configureStore({
  reducer: {
    blog: persistedReducer,
    data: UserdataSlice,
    AllData: DataSlice,
    isAuth: AuthSliceReducer,
    RewardData: RewardSlice,
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
