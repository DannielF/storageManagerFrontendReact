import React from "react";
import { Link } from "react-router-dom";
import "./Not-found.scss";

function NotFound() {
  return (
    <div className="container-not-found">
      <figure>
        <img
          src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
          alt="not-found"
        />
      </figure>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
