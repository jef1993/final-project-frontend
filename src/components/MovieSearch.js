import React from "react";
import { Icon } from "@iconify/react";

export const MovieSearch = () => {
  return (
    <div className="banner__box">
      <h2 className="banner__title">Discover millions movies right here</h2>
      <form
        className="search"
        onSubmit={() => {
          console.log("search movies");
        }}
      >
        <input
          type="text"
          placeholder="Search movies by name"
          className="search__input"
        ></input>
        <button type="submit" className="search__btn">
          <Icon icon="mdi:magnify" color="rgb(168, 166, 162)" height="36" />
        </button>
      </form>
    </div>
  );
};
