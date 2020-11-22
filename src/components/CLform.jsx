import React from "react";
import { Link } from "react-router-dom";
import Client from "./client.svg";

const CLform = () => {
  return (
    <div className="row l-form">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      <div className="box-1">
        <img src={Client} alt="" />
        <h1 className="black-text">Login</h1>
      </div>
      <form className="col s12">
        <div className="inputs">
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
        </div>
        <div className="box-2">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default CLform;
