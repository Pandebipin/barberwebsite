import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  data: [],
};
export const fetchdata = createAsyncThunk("fetchdata/Userdata", async () => {
  try {
    const docref = collection(db, "userdata");
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

export const addData = createAsyncThunk(
  "data/adddata",
  async (data, { rejectWithValue }) => {
    try {
      const firestoreref = getFirestore();

      const docref = await addDoc(collection(firestoreref, "userdata"), {
        name: data.name,
        phone: data.phone,
        timeSlot: data.timeSlot,
        date: data.date,
        service: data.service,
        email: data.email,
        status: data.status,
      });

      return {
        id: docref.id,
        ...data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UpdateStatus = createAsyncThunk(
  "data/updateStatus",
  async ({ id, newStatus }) => {
    try {
      const collId = doc(db, "userdata", id);
      await updateDoc(collId, {
        status: newStatus,
      });
      return { id, newStatus };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletestat = createAsyncThunk("data/deleteId", async (id) => {
  const docRef = doc(db, "userdata", id);
  await deleteDoc(docRef);
  return id;
});

const UserdataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, action) => {
        // console.log("Fetched data:", action.payload);
        state.data = action.payload;
      })
      .addCase(addData.rejected, (state, action) => {
        // console.log("error", action.payload);
      })
      .addCase(addData.fulfilled, (state, action) => {
        // console.log("data added:", action.payload);
        state.data.push(action.payload);
      })
      .addCase(UpdateStatus.fulfilled, (state, action) => {
        const { id, newStatus } = action.payload;
        // console.log("updated", id, newStatus);
        const data1 = state.data.find((elem) => elem.id === id);
        if (data1) {
          data1.status = newStatus;
        }
      })
      .addCase(deletestat.fulfilled, (state, action) => {
        state.data = state.data.filter((data) => data.id !== action.payload);
      });
  },
});

export const data = (state) => state.data.data;
export default UserdataSlice.reducer;
export const { deleteData } = UserdataSlice.actions;
