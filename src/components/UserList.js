import React, { useEffect, useState } from "react";
import { fetchUserMovies, pickMovie } from "../utils/index";
import { useHistory } from "react-router-dom";
import { Card2 } from "./Card";
import { Icon } from "@iconify/react";

export const UserList = (props) => {
  const user = props.curUser;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUserMovies(user, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  const randomHandler = async () => {
    history.push({
      pathname: `/movies/${await pickMovie(props.curUser)}`,
    });
  };

  return (
    <div className="search-result">
      <div className="search-result__title-box">
        <h3 className="search-result__title">
          {data.message ? data.message : "YOUR MOVIES"}
        </h3>
        <button className="search-result__randomise" onClick={randomHandler}>
          <Icon icon="mdi:dice-2-outline" color="#eaeef0" height="36" />
        </button>
      </div>

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
