import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Client from "./client.svg";
import Home from "./Home"
// import { db, auth } from "../firebase"
import { firebaseApp } from '../firebase';
// import { useForm } from "react-hook-form"

const CLform = () => {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = (evt) => {
    evt.preventDefault();
    clearErrors()
    firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      <Home user={user.value}></Home>
      window.location = "/home"
    })
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
          break
        case "auth/wrong-password":
          setPasswordError(err.message)
          break
      }
    })
  }

  const handleSignUp = (evt) => {
    evt.preventDefault();
    clearErrors()
    firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // get firebase user id
      const id = firebaseApp.auth().currentUser
      localStorage.setItem('id', id.uid)
      window.location = "/ce-form"
    })
    .catch((err) => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
          break
        case "auth/weak-password":
          setPasswordError(err.message)
          break
      }
    })
  }

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

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
                name="email"
                type="email"
                value={email}
                className="validate"
                placeholder="Email"
                autoComplete="off"
                onChange={(evt) => setEmail(evt.target.value)}
              />
              <p className="errorMsg">{ emailError }</p>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                type="password"
                value={password}
                className="validate"
                placeholder="Password"
                autoComplete="off"
                onChange={(evt) => setPassword(evt.target.value)}
              />
              <p className="errorMsg">{ passwordError }</p>
            </div>
          </div>
        </div>
        <div className="box-2">
          {hasAccount ? (
            <>
              <button
              className="btn waves-effect waves-light black"
              type="submit"
              name="action"
              onClick={handleLogin}
              >
              Sign in
              </button>
              <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
            </>
          ) : (
            <>
              <button
              className="btn waves-effect waves-light black"
              type="submit"
              name="action"
              onClick={handleSignUp}
              >
              Sign Up
              </button>
              <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
            </>
          )}          
        </div>
      </form>
    </div>
  );
};

export default CLform;
