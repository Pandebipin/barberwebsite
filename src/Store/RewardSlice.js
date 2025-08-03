import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  RewardData: [],
};
export const fetchRewardData = createAsyncThunk("fetch/fetchdata", async () => {
  try {
    const docref = collection(db, "userReward");
    const docSnap = await getDocs(docref);
    const data = docSnap.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    // console.error("Error fetching data:", error);
    throw error;
  }
});
export const AddRewardData = createAsyncThunk(
  "addAlldata/alldata",
  async (data) => {
    const { ReferralCode, points, stage, auth } = data;
    try {
      const firestoreref = getFirestore();
      const docref = await addDoc(collection(firestoreref, "userReward"), {
        ReferralCode,
        points,
        stage,
        auth,
      });
      // console.log("rewardData", data);
      return {
        id: docref.id,
        ReferralCode,
        points,
        stage,
        auth,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const AddrewardsPoints = createAsyncThunk(
  "data/updateStatus",
  async ({
    userId,
    newPoints,
    ReferralCode,
    isRewardEarned,
    isRewardEarned2,
    isRewardEarned3,
    isRewardEarned4,
  }) => {
    try {
      const collId = doc(db, "userReward", userId);
      const updatePayload = {};

      if (typeof newPoints === "number") {
        updatePayload.points = increment(newPoints);
      }

      if (typeof ReferralCode !== "undefined") {
        updatePayload.ReferralCode = ReferralCode;
      }

      if (typeof isRewardEarned !== "undefined") {
        updatePayload.isRewardEarned = isRewardEarned;
      }
      if (typeof isRewardEarned2 !== "undefined") {
        updatePayload.isRewardEarned2 = isRewardEarned2;
      }
      if (typeof isRewardEarned3 !== "undefined") {
        updatePayload.isRewardEarned3 = isRewardEarned3;
      }
      if (typeof isRewardEarned4 !== "undefined") {
        updatePayload.isRewardEarned4 = isRewardEarned4;
      }

      await updateDoc(collId, updatePayload);
      return {
        userId,
        newPoints,
        isRewardEarned,
        isRewardEarned2,
        isRewardEarned3,
        isRewardEarned4,
        ReferralCode,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

const RewardSlice = createSlice({
  name: "RewardData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRewardData.fulfilled, (state, action) => {
      state.RewardData = action.payload;
    }),
      builder.addCase(AddRewardData.fulfilled, (state, action) => {
        state.RewardData.push(action.payload);
        // console.log("data added", action.payload);
      });
    builder.addCase(AddrewardsPoints.fulfilled, (state, action) => {
      const { userId, newPoints } = action.payload;
      // console.log(action.payload);
      const Userdata = state.RewardData.find((elem) => elem.docId === userId);
      if (Userdata) {
        Userdata.points = newPoints;
      }
    });
  },
});

export const rewardData = (state) => state.RewardData.RewardData;
export default RewardSlice.reducer;
