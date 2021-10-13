import React, { useEffect, useState } from "react";
import { fetchUserMovies } from "../utils/index";
import { Card2 } from "./Card";

export const UserList = (props) => {
  const user = props.curUser;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUserMovies(user, setData);
  }, []);

  return (
    <div className="search-result">
      <h3 className="search-result__title">
        {data.message ? data.message : "YOUR MOVIES"}
      </h3>
      <ul className="search-result__posters">
        {!data.message
          ? data.map((obj, i) => {
              return <Card2 key={i} id={obj.api_id} path={obj.poster_path} />;
            })
          : ""}
      </ul>
    </div>
  );
};
