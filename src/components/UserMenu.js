import React from "react";
import { Icon } from "@iconify/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const UserMenu = (props) => {
  return (
    <div className="banner__box">
      <h2>Hi, {props.userName}. What can we do for you?</h2>
      <div className="menu">
        <Link className="menu__item" to="/account/mylist">
          <Icon icon="mdi:bookmark-outline" color="#eaeef0" height="48" />
        </Link>
        <Link className="menu__item" to="/account/settings">
          <Icon icon="mdi:cog-outline" color="#eaeef0" height="48" />
        </Link>
        <Link className="menu__item" onClick={props.resetUser} to="/">
          <Icon icon="mdi:logout-variant" color="#eaeef0" height="48" />
        </Link>
      </div>
    </div>
  );
};
