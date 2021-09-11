import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link class="navbar-brand" to="/">
          Home
        </Link>

        <Link class="navbar-brand" to="/root">
          Root
        </Link>

        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
