import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { MovieSearch } from "./MovieSearch";
import { UserMenu } from "./UserMenu";
import { DetailsTop, DetailsBackdrop } from "./Details";
// import { useHistory } from "react-router-dom";

export const Banner = (props) => {
  return (
    <div className={`banner ${props.bgImg}`}>
      <Switch>
        <Route path="/movies">
          <DetailsBackdrop />
        </Route>
      </Switch>

      <div className="navbar">
        <Link className="logo" to="/">
          MOVILIST
        </Link>
        <div className="nav">
          <h3 className="nav__user">{props.username}</h3>
          <Link className="nav__link" to={props.linkTo} onClick={props.navBtn}>
            <Icon
              className="nav__icon"
              icon={`mdi:${props.iconName}`}
              color="#eaeef0"
              height="48"
            />
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path={["/"]}>
          <MovieSearch queryChange={props.queryChange} query={props.query} />
        </Route>
        <Route path={["/search"]}>
          <MovieSearch queryChange={props.queryChange} query={props.query} />
        </Route>
        <Route path="/account">
          <UserMenu userName={props.username} resetUser={props.resetUser} />
        </Route>
        <Route>
          <DetailsTop />
        </Route>
      </Switch>
    </div>
  );
};

// export default Banner;
