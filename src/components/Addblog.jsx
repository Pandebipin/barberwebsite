import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBlog, blogs, fetchblogs } from "../Store/BlogpostSlice";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [imgfile, setimgfile] = useState(null);
  const [desc, setDesc] = useState("");
  console.log(title);
  const dispatch = useDispatch();

  const handleclick = (e) => {
    e.preventDefault();

    if (!title || !imgfile || !desc) {
      console.log("Please provide title, image, and description"); // Handle missing fields
      return;
    }
    dispatch(AddBlog({ title, imgfile, desc }));
  };

  const handlefilechange = (e) => {
    setimgfile(e.target.files[0]);
  };
  useEffect(() => {
    dispatch(fetchblogs());
  }, [dispatch]);

  const blog = useSelector(blogs);
  console.log(blog);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handlefilechange} />
      <button onClick={handleclick} className="text-white px-3">
        submit
      </button>
      {blog.map((elem) => {
        return <h1 className="text-white">{elem.title}</h1>;
      })}
    </div>
  );
};

export default Addblog;
