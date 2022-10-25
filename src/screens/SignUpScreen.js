import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    // console.log("object", auth);
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupscreen-gray">New to Netflix?</span>
          <span className="signupscreen-link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}
