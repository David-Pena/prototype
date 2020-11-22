import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from '../firebase.js';

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
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Log in
        </button>
        <Link to="/cr-form" className="black-text">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default CLform;
