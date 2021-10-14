import React, { useState, useEffect } from "react";
import { searchMovies } from "../utils/list";
import { Card2 } from "./Card";

export const SearchResult = () => {
  const query = window.location.pathname.split("/").slice(-1);
  const [data, setData] = useState("");

  useEffect(() => {
    searchMovies(setData, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-result">
      <div className="search-result__title-box">
        <h3 className="search-result__title">SEARCH RESULT:</h3>
      </div>

      <ul className="search-result__posters">
        {data !== ""
          ? data.map((obj, i) => {
              return <Card2 key={i} id={obj.id} path={obj.poster_path} />;
            })
          : ""}
      </ul>
    </div>
  );
};
