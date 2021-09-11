import React from "react";
import PaginationPosts from "../Posts/PaginationPosts";

const Root = () => {
  return (
    <div className="container">
      <div className="py-4">
        <PaginationPosts type="{root}"/>
      </div>
    </div>
  );
};

export default Root;
