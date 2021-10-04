import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/error.png";

const NotFound = () => {
  return (
    <div>
      <img className="mx-auto" src={img} alt="" />
      <h1 className="text-4xl font-bold my-4">
        "We can't find the page your are looking for""
      </h1>
      <Link to="/home">
        <button className="font-medium bg-green-400 border-1 rounded-md py-4 px-8">
          {" "}
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
