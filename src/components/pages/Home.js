import React from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
        <Posts type={"home"}/>
      </div>
    </div>
  );
};

export default Home;
