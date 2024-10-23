import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialState = {
  blog: [],
};

export const fetchblogs = createAsyncThunk("blogdata/fetchblogs", async () => {
  console.log("jsdo");

  try {
    const docref = doc(db, "blogdata");
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
  const { imgfile, title } = data;
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
    });
    return { id: docref.id, title, img: imgUrl };
  } catch (error) {}
});
const BlogpostSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchblogs.fulfilled, (state, action) => {
        console.log("Fetched blogs:", action.payload);
        state.blog = action.payload || [];
      })
      .addCase(AddBlog.fulfilled, (state, action) => {
        console.log("Blog added:", action.payload);
        if (!state.blog) {
          state.blog = [];
        }
        state.blog.push(action.payload);
      });
  },
});

export const blogs = (state) => state.blog.blog;
export default BlogpostSlice.reducer;
