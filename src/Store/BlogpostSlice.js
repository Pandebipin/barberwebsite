import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  blog: [],
  status: "idle",
  error: null,
};

export const fetchblogs = createAsyncThunk("blogdata/fetchblogs", async () => {
  console.log(title);

  try {
    const docref = collection(db, "blogdata");
    const docSnap = await getDocs(docref);
    const blogs = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return blogs;
  } catch (error) {
    console.log(error.message);
  }
});

export const AddBlog = createAsyncThunk("blog/AddBlog", async (data) => {
  const { imgfile, title, desc } = data;
  console.log(title);

  try {
    const storage = getStorage();
    const firestoreref = getFirestore();
    const storageref = ref(storage, `images/${imgfile.name}`);
    await uploadBytes(storageref, imgfile);
    console.log("uploaded");

    const imgUrl = await getDownloadURL(storageref);
    const docref = await addDoc(collection(firestoreref, "blogdata"), {
      img: imgUrl,
      title,
      desc,
    });
    return { id: docref.id, desc, title, img: imgUrl };
  } catch (error) {
    throw error;
  }
});
const BlogpostSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    deleteBlog: (state, action) => {
      state.blog = state.blog.filter((blog) => blog.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchblogs.fulfilled, (state, action) => {
        console.log("Fetched blogs:", action.payload);
        state.blog = action.payload;
      })
      .addCase(AddBlog.fulfilled, (state, action) => {
        console.log("Blog added:", action.payload);
        state.blog.push(action.payload);
      })
      .addCase(AddBlog.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchblogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchblogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { deleteBlog } = BlogpostSlice.actions;
export const blogs = (state) => state.blog.blog;
export default BlogpostSlice.reducer;
