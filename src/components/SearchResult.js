import React from "react";

export const SearchResult = (props) => {
  return (
    <div className="search">
      <div className="search__title">Search result for: {props.query}</div>
      <div className="search__content">{window.location.pathname}</div>
    </div>
  );
};
