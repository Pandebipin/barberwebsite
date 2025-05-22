import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
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
      docId: doc.id,
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
    const { date, timeSlot, service, name, email, phone, notes, status } = data;
    try {
      const firestoreref = getFirestore();
      const docref = await addDoc(collection(firestoreref, "Alldata"), {
        date,
        timeSlot,
        service,
        name,
        email,
        phone,
        notes,
        status,
      });
      return {
        docId: docref.id,
        date,
        timeSlot,
        service,
        name,
        email,
        phone,
        notes,
        status,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const updateStatus = createAsyncThunk(
  "data/updateStatus",
  async ({ id, newStatus }, thunkAPI) => {
    try {
      const docRef = doc(db, "Alldata", id);
      await updateDoc(docRef, { status: newStatus });
      return { id, newStatus };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      console.log("data added", action.payload);
    });
    builder.addCase(updateStatus.fulfilled, (state, action) => {
      const { id, newStatus } = action.payload;
      const index = state.Alldata.findIndex((item) => item.docId === id);
      console.log(index);
      if (index !== -1) {
        state.Alldata[index].status = newStatus;
      }
    });
    builder.addCase(updateStatus.rejected, (state, action) => {
      console.error("❌ Failed to update status:", action.payload);
    });
  },
});

export const Alldata = (state) => state.AllData?.Alldata;
export const { deleteId } = DataSlice.actions;
export default DataSlice.reducer;
