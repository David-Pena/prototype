import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start">
      <p>By. DAS Team</p>
      <div className="title">
        <h1>loMMejoBBer</h1>
      </div>
      <div className="tag-name">
        <h2>The job in your pocket</h2>
      </div>
      <div className="s-buttons">
        <Link className="waves-effect waves-dark white black-text white btn wf" to="/wl-form">
          Enter as Worker
        </Link>
        <Link className="waves-effect waves-light black btn cf" to="/cl-form">
          Enter as Client
        </Link>
      </div>
    </div>
  );
};

export default Start;
