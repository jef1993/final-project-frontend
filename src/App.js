import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  trendingMovies,
  nowPlaying,
  topRated,
  upComingMovies,
} from "./utils/list";

import "./App.css";

import { logIn } from "./utils/index";

import { Banner } from "./components/Banner";
import { Overlay } from "./components/Overlay";
import { List } from "./components/List";
import { DetailsBottom } from "./components/Details";
import { toggleOverlay } from "./functions";
import { SearchResult } from "./components/SearchResult";

export function App() {
  const [curUser, setCurUser] = useState("");
  const [query, setQuery] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navSwitch = () => {
    const MyPath = () => {
      return useLocation().pathname;
    };
    const obj = {};
    if (curUser === "") {
      obj.iconName = "login-variant";
      obj.path = <MyPath />;
    } else {
      obj.iconName = "account-box-outline";
      obj.path = `/account`;
    }
    return obj;
  };

  const userHandler = () => {
    if (curUser === "") {
      toggleOverlay();
    }
  };
  const loginHandler = (e) => {
    e.preventdefault();
    logIn(email, password, setCurUser);
  };

  const registerHandler = () => {};

  const logoutHandler = () => {
    setCurUser("");
  };

  const queryChangeHandler = (input) => {
    setQuery(input);
    console.log(input);
  };

  return (
    <Router>
      <div className="App">
        <Overlay
          onSignIn={loginHandler}
          onRegister={registerHandler}
          emailChange={(input) => {
            setEmail(input);
            // console.log(input);
          }}
          passwordChange={(input) => {
            setPassword(input);
            // console.log(input);
          }}
          newUsernameChange={(input) => {
            setNewUsername(input);
            // console.log(input);
          }}
          newEmailChange={(input) => {
            setNewEmail(input);
            // console.log(input);
          }}
          newPasswordChange={(input) => {
            setNewPassword(input);
            // console.log(input);
          }}
        />

        <div className="main">
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Banner
                bgImg="bg-1"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                userNameTop={curUser !== "" ? curUser.username : ""}
                navBtn={userHandler}
                query={query}
                queryChange={queryChangeHandler}
              />
            </Route>
            <Route path={["/search"]}>
              <Banner
                bgImg="bg-1"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                userNameTop={curUser !== "" ? curUser.username : ""}
                navBtn={userHandler}
                query={query}
                queryChange={queryChangeHandler}
              />
            </Route>
            <Route path="/account">
              <Banner
                bgImg="bg-2"
                iconName="backspace-outline"
                userName={curUser !== "" ? curUser.username : ""}
                resetUser={() => {
                  logoutHandler();
                }}
                linkTo="/"
              />
            </Route>
            <Route path="/movies">
              <Banner
                bgImg="banner__backdrop"
                iconName="backspace-outline"
                userName={curUser !== "" ? curUser.username : ""}
                resetUser={() => {
                  logoutHandler();
                }}
                linkTo="/"
              />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <List fetchFunc={trendingMovies} title="Trending" />
              <List fetchFunc={nowPlaying} title="Now in Cinema" />
              <List fetchFunc={topRated} title="UK's favourite" />
              <List fetchFunc={upComingMovies} title="upcoming" />
            </Route>
            <Route path="/movies">
              <DetailsBottom />
            </Route>
            <Route>
              <SearchResult />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
