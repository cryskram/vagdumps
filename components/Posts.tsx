import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Post from "./post/Post";

const data = {
  data: [
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  ],
};

const Posts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-6">
        <div className="bg-mGrey p-22 rounded-xl hover:bg-mGrey/50 transition-all duration-150 cursor-pointer">
          <FaPlusCircle size={40} />
        </div>
        {data.data.map((d, idx) => (
          <div key={idx}>
            <Post date={d.date} time={d.time} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
