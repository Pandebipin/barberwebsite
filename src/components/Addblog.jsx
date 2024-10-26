import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddBlog } from "../Store/BlogpostSlice";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [imgfile, setimgfile] = useState(null);
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(AddBlog({ title, imgfile, desc }));
  };

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
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setimgfile(e.target.files[0])}
      />
      <button onClick={handleclick} className="text-white px-3">
        submit
      </button>
    </div>
  );
};

export default Addblog;
