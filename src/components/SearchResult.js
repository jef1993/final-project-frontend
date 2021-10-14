import React, { useState, useEffect } from "react";
import { searchMovies } from "../utils/list";
import { Card2 } from "./Card";

export const SearchResult = (props) => {
  const query = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");

  useEffect(() => {
    searchMovies(setData, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-result">
      {/* <div className='search-result__title-box'></div> */}
      <h3 className="search-result__title-box">SEARCH RESULT:</h3>

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
