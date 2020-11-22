import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { db } from '../firebase.js';
=======
import Client from "./client.svg";
>>>>>>> f42e11d660877766e44871ef80e7193cf74139a3

const CLform = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('clients').add({
      email: email,
      password: password
    })
    .then(() => {
      alert('Sign in SUCCESSFULLY')
    })
    .catch((error) => {
      alert(error.message)
    })

    setEmail('')
    setPassword('')
  }

  return (
    <div className="row l-form">
<<<<<<< HEAD
      <h1>Client Login</h1>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              value = {email}
              className="validate"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              value={password}
              className="validate"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
=======
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
>>>>>>> f42e11d660877766e44871ef80e7193cf74139a3
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
