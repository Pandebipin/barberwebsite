import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  data: [],
};
export const fetchdata = createAsyncThunk("fetchdata/Userdata", async () => {
  try {
    const docref = collection(db, "Userdata");
    const docSnap = await getDocs(docref);
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    throw error;
  }
});

export const addData = createAsyncThunk("data/adddata", async (data) => {
  const { number, secondname, firstname, time } = data;
  try {
    const firestoreref = getFirestore();
    // console.log("adding data", data);

    const docref = await addDoc(collection(firestoreref, "Userdata"), {
      firstname,
      secondname,
      number,
      time,
    });
    // console.log("data added", data);

    return {
      id: docref.id,
      firstname,
      secondname,
      number,
      time,
    };
  } catch (error) {
    throw error;
  }
});

const UserdataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, action) => {
        // console.log("Fetched data:", action.payload);
        state.data = action.payload;
      })
      .addCase(addData.fulfilled, (state, action) => {
        // console.log("data added:", action.payload);
        state.data.push(action.payload);
      });
  },
});

export default UserdataSlice.reducer;
export const { deleteData } = UserdataSlice.actions;
