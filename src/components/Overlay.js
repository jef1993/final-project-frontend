import React from "react";
// import { useHistory } from "react-router-dom";
import { toggleClass, toggleClassAll } from "../functions";

export const Overlay = (props) => {
  //   const history = useHistory();
  //   const homeBtn = (path) => history.push(`${path}`);

  return (
    <div className="overlay hidden">
      <div
        className="overlay__bg"
        onClick={() => {
          toggleClass("overlay", "hidden");
        }}
      ></div>
      <div className="overlay__container">
        <div className="overlay__title">
          <h2 className="logo overlay__icon">
            MOVILIST<span>Account</span>
          </h2>
        </div>
        <div className="overlay__content overlay__signin">
          <form className="overlay__form" onSubmit={props.onSignIn}>
            <div className="overlay__inputs">
              <input
                className="overlay__input"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  props.usernameChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  props.passwordChange(e.target.value);
                }}
              ></input>
            </div>

            <button className="overlay__btn">Sign In</button>
          </form>

          <p className="overlay__link">
            New user?{" "}
            <span
              onClick={() => {
                toggleClassAll("overlay__content", "swapToRight");
              }}
            >
              Create an account
            </span>
          </p>
        </div>
        <div className="overlay__content overlay__signup">
          <form className="overlay__form" onSubmit={props.onRegister}>
            <div className="overlay__inputs">
              <input
                className="overlay__input"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  props.usernameChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="email"
                placeholder="email"
                onChange={(e) => {
                  props.emailChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  props.passwordChange(e.target.value);
                }}
              ></input>
            </div>

            <button className="overlay__btn">Register</button>
          </form>

          <p className="overlay__link">
            Have a account?{" "}
            <span
              onClick={() => {
                toggleClassAll("overlay__content", "swapToRight");
              }}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
