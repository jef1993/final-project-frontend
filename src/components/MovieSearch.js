import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

export const MovieSearch = (props) => {
  const history = useHistory();
  const historyBtn = (path) => history.push(`${path}`);

  const [query, setQuery] = useState("");

  return (
    <div className="banner__box">
      <h2 className="banner__title">Discover millions movies right here</h2>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          historyBtn(`/search/${query}`);
        }}
      >
        <input
          type="text"
          placeholder="Search movies by name"
          className="search__input"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit" className="search__btn">
          <Icon icon="mdi:magnify" color="rgb(168, 166, 162)" height="36" />
        </button>
      </form>
    </div>
  );
};
