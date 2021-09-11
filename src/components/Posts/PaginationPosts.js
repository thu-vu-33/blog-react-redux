import React, { useState, useEffect, useReducer } from "react";
import Pagination from "reactjs-hooks-pagination";
import axios from "axios";
import PostCard from "./PostCard";
const pageLimit = 5;
const initialState = {
  posts: {},
  loading: true,
  error: "",
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "OnSuccess":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "OnFailure":
      return {
        loading: false,
        posts: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

const PaginationPosts = ({ type }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/posts?page=" +
          currentPage +
          "&limit=" +
          pageLimit
      )
      .then((response) => {
        dispatch({ type: "OnSuccess", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "OnFailure" });
      });
  }, [currentPage]);
  const { loading, posts, error } = state;

  return (
    <div className="row">
        {loading ? ( <div>Loading ...</div>) :
     ( posts.map((postItem) => (
        <PostCard postItem={postItem} />
      )))
}
      <div >
        <Pagination
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          pageRangeDisplayed={1}
          onChangePage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PaginationPosts;
