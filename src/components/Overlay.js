import React from "react";
import { useHistory } from "react-router-dom";
import { toggleClass, toggleClassAll } from "../functions";

export const Overlay = (props) => {
  const history = useHistory();
  const homeBtn = (path) => history.push(`${path}`);

  return (
    <div className="overlay hidden">
      <div className="overlay__bg">
        <div className="overlay__container">
          <div className="overlay__title">
            <h2 className="logo overlay__icon">
              MOVILIST<span>Account</span>
            </h2>
          </div>
          <div className="overlay__content overlay__signin">
            <form className="overlay__form" onSubmit={props.onSignIn}>
              <input
                className="overlay__input"
                type="text"
                placeholder="Username"
              ></input>
              <input
                className="overlay__input"
                type="password"
                placeholder="Password"
              ></input>
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
            <div className="overlay__form"></div>
            <div className="overlay__link">
              Have a account?{" "}
              <span
                onClick={() => {
                  toggleClassAll("overlay__content", "swapToRight");
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
