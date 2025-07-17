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

export const addData = createAsyncThunk("data/adddata", async (data) => {
  const { name, email, phone, timeSlot, date, service, status } = data;
  try {
    const firestoreref = getFirestore();
    // console.log("adding data", data);

    const docref = await addDoc(collection(firestoreref, "userdata"), {
      name,
      phone,
      timeSlot,
      date,
      service,
      email,
      status,
    });
    // console.log("data added", data);

    return {
      id: docref.id,
      name,
      phone,
      timeSlot,
      date,
      service,
      email,
      status,
    };
  } catch (error) {
    throw error;
  }
});

export const UpdateStatus = createAsyncThunk(
  "data/updateStatus",
  async ({ id, newStatus }) => {
    try {
      const collId = doc(db, "userdata", id);
      await updateDoc(collId, {
        status: newStatus,
      });
      console.log(status);
      return { id, newStatus };
    } catch (error) {
      console.log(error);
    }
  }
);
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
      })
      .addCase(UpdateStatus.fulfilled, (state, action) => {
        const { id, newStatus } = action.payload;
        console.log(id, newStatus);
        const data1 = state.data.find((elem) => elem.id === id);
        if (data1) {
          state.data.status = newStatus;
        }
      });
  },
});

export const data = (state) => state.data.data;
export default UserdataSlice.reducer;
export const { deleteData } = UserdataSlice.actions;
