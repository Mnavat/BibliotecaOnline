import React from "react";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="not-found__link">Go back to Home</a>
    </div>
  );
};

export default NotFound;
