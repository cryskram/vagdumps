import React from "react";

interface PostProp {
  date: string;
  time: string;
}

const Post = ({ date, time }: PostProp) => {
  return (
    <div className="bg-mGreen px-16 py-22 rounded-xl flex flex-col items-center">
      <h1>{date}</h1>
      <h1>{time}</h1>
    </div>
  );
};

export default Post;
