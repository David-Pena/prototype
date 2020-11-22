import React from "react";
import { Link } from "react-router-dom";

const WLform = () => {
  return (
    <div className="row l-form">
      <h1>Worker Login</h1>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Log in
        </button>
        <Link to="/wr-form" className="black-text">Sign up</Link>
      </form>
    </div>
  );
};

export default WLform;
