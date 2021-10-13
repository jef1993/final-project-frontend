import React, { useState, useEffect } from "react";
import { searchMovies } from "../utils/list";
import { Card2 } from "./Card";

export const SearchResult = (props) => {
  const query = window.location.pathname.split("/")[2];
  // const [id, setid] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    // setid(props.id);
    searchMovies(setData, query);
  }, [data, query]);

  return (
    <div className="search-result">
      <h3 className="search-result__title">SEARCH RESULT:</h3>

      <ul className="search-result__posters">
        {data !== ""
          ? data.map((obj, i) => {
              return <Card2 index={i} id={obj.id} path={obj.poster_path} />;
            })
          : ""}
      </ul>
    </div>
  );
};
