import React from "react";
import { Link } from "react-router-dom";
import Client from "./client.svg";
import { db, auth } from "../firebase"
import { useForm } from "react-hook-form"

const CLform = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (info, evt) => {
    evt.preventDefault();
    auth.createUserWithEmailAndPassword(info.email, info.password)
        .then((res) => alert('Signed up completed'))
    // db.collection('clients').add({
    //   email: info.email,
    //   password: info.password
    // })
    // .then(() => {
    //   alert('Sign in SUCCESSFULLY')
    // })
    // .catch((error) => {
    //   alert(error.message)
    // })
    // evt.target.reset();
  }

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
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                type="email"
                className="validate"
                placeholder="Email"
                autoComplete="off"
                ref={register({
                  required: { value: true, message: "Field Required"},
                })}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                type="password"
                className="validate"
                placeholder="Password"
                autoComplete="off"
                ref={register({
                  required: { value: true, message: "Field Required"},
                })}
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
