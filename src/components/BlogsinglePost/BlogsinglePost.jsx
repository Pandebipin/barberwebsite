import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogs, fetchblogs } from "../../Store/BlogpostSlice";
import { Link, useParams } from "react-router-dom";

function BlogsinglePost() {
  const dispatch = useDispatch();
  const blog = useSelector(blogs);

  useEffect(() => {
    if (blog.length === 0) {
      dispatch(fetchblogs());
    }
  }, [dispatch, blog.length]);
  const path = useParams();
  console.log(path);
  return (
    <div className=" p-5 sm:p-10 md:p-16">
      <div className="w-full">
        {blog.map((elem) => {
          if (elem.id == path.id) {
            return (
              <div className="py-1 flex flex-col gap-5 mx-auto">
                <title className="text-white text-lg font-bold">
                  {elem.title}
                </title>
                <h1 className="text-white md:text-2xl text-lg font-bold text-center">
                  {" "}
                  {elem.title}
                </h1>
                <img
                  className="w-full h-[35vh] lg:h-[60vh] object-cover"
                  src={elem.img}
                  alt=""
                />
                <p className="text-white lg:text-lg text-sm lg:capitalize monotago">
                  {elem.desc}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default BlogsinglePost;
