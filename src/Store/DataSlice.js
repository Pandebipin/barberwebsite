import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  Alldata: [],
  status: "",
};
export const fetchAlldata = createAsyncThunk("Alldata/fetchdata", async () => {
  try {
    const docref = collection(db, "Alldata");
    const docSnap = await getDocs(docref);
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

export const AddAlldata = createAsyncThunk(
  "addAlldata/alldata",
  async (data) => {
    const { id, timeslots } = data;
    try {
      const firestoreref = getFirestore();
      const docref = await addDoc(collection(firestoreref, "Alldata"), {
        id,
        timeslots,
      });
      return { id, timeslots };
    } catch (error) {
      throw error;
    }
  }
);
const DataSlice = createSlice({
  name: "Alldata",
  initialState,
  reducers: {
    deleteId: (state, action) => {
      state.Alldata = state.Alldata.filter(
        (data) => data.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlldata.fulfilled, (state, action) => {
      state.Alldata = action.payload;
      // console.log("fetched", action.payload);
    });
    builder.addCase(AddAlldata.fulfilled, (state, action) => {
      state.Alldata.push(action.payload);
      // console.log("data added", action.payload);
    });
  },
});

export const Alldata = (state) => state.AllData?.Alldata;
export const { deleteId } = DataSlice.actions;
export default DataSlice.reducer;
