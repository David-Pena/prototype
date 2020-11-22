import React from "react";
import {Link} from 'react-router-dom'

const WRform = () => {
  return (
    <div className="row l-form">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              className="validate"
              placeholder="Name"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="document"
              type="text"
              className="validate"
              placeholder="Document"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="cellphone"
              type="text"
              className="validate"
              placeholder="Cellphone"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="service"
              type="text"
              className="validate"
              placeholder="Service"
              autoComplete="off"
            />
          </div>
        </div>
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
          Sign up
        </button>
        <Link to="/wl-form" className="black-text">
          Log in
        </Link>
      </form>
    </div>
  );
};

export default WRform;
