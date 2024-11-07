import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogs, deleteBlog, fetchblogs } from "../../Store/BlogpostSlice";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { Link } from "react-router-dom";

function BlogPost() {
  const dispatch = useDispatch();
  const blog = useSelector(blogs);

  useEffect(() => {
    if (blog.length === 0) {
      dispatch(fetchblogs());
    }
  }, [dispatch, blog.length]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogdata", id));
    dispatch(deleteBlog(id));
    console.log(`Document with ID ${id} has been deleted`);
    return id;
  };

  return (
    <div className="mx-w-[95%] h-auto sm:mx-w-[85%] lg:mx-w-[75%] xl:mx-w-[60%] p-4 mx-auto">
      <div className="text-center mb-4">
        <h1 className="bg-gradient-to-r  from-[#FF4500] via-[#FF6347] to-[#FF7F50] bg-clip-text text-transparent text-lg sm:text-xl lg:text-2xl ">
          Latest News
        </h1>
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">
          Amazing Blog post and Articles
        </h1>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
          {blog.map((elem) => {
            return (
              <div className="bg-[#16162A] flex flex-col justify-between leading-normal rounded-lg">
                <img
                  className="h-[300px] object-cover rounded-lg"
                  src={elem.img}
                  alt=""
                />
                <div className="p-4 pt-2">
                  <div className="mb-2 py-1">
                    <Link
                      to={`blog/${elem.id}`}
                      className="text-white font-bold text-lg mb-2 py-3 hover:text-indigo-600 inline-block"
                    >
                      {elem.title}
                    </Link>
                    <p className="text-gray-400 text-sm">{elem.desc}</p>
                    <button onClick={() => handleDelete(elem.id)}>
                      delete doc
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
