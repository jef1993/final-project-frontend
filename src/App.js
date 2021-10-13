import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  trendingMovies,
  nowPlaying,
  topRated,
  upComingMovies,
} from "./utils/list";

import { tokenLogin } from "./utils/index";

import "./App.css";

import { Banner } from "./components/Banner";
import { Overlay } from "./components/Overlay";
import { List } from "./components/List";
import { DetailsBottom } from "./components/Details";
import { toggleOverlay } from "./functions";
import { SearchResult } from "./components/SearchResult";
import { UserList } from "./components/UserList";

export function App() {
  const [curUser, setCurUser] = useState("");

  useEffect(() => {
    tokenLogin(setCurUser);
  }, []);

  const navSwitch = () => {
    const obj = {};
    if (curUser === "") {
      obj.iconName = "login-variant";
      obj.path = "/";
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

  const logoutHandler = () => {
    setCurUser("");
    localStorage.removeItem("myToken");
    console.log(curUser);
  };

  return (
    <Router>
      <div className="App">
        <Overlay setCurUser={setCurUser} />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Banner
                bgImg="bg-1"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                username={curUser}
                navBtn={userHandler}
              />
            </Route>
            <Route path="/search">
              <Banner
                bgImg="bg-1"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                username={curUser}
                navBtn={userHandler}
              />
            </Route>
            <Route path="/account">
              <Banner
                bgImg="bg-2"
                iconName="backspace-outline"
                username={curUser}
                resetUser={() => {
                  logoutHandler();
                }}
                linkTo="/"
              />
            </Route>
            <Route path="/movies">
              <Banner
                bgImg="banner__backdrop"
                iconName={navSwitch().iconName}
                linkTo={navSwitch().path}
                navBtn={userHandler}
                username={curUser}
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
              <DetailsBottom curUser={curUser} />
            </Route>
            <Route path="/search">
              <SearchResult />
            </Route>
            <Route path="/account">
              <UserList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
