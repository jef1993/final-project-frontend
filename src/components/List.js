import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { trendingMovie } from "../utils/index";

export const List = ({ fetchFunc, title }) => {
  const [data, setData] = useState("");

  let method = fetchFunc;
  const getMethod = () => {
    if (typeof method === "function") {
      method = fetchFunc(setData);
    }
    return method;
  };

  useEffect(() => {
    getMethod();
  }, []);

  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>

      <div className="list__btn--prev">
        <Icon
          className="list__btn--icon"
          icon="mdi:chevron-left"
          color="#eaeef0"
          height="48"
          onClick={() => {
            console.log("prev");
          }}
        />
      </div>
      <ul className="list__posters">
        {data !== ""
          ? data.results.map((obj, i) => {
              return (
                <li className="list__item" key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                    alt="img"
                  ></img>
                </li>
              );
            })
          : ""}
      </ul>
      <div className="list__btn--next">
        <Icon
          className="list__btn--icon"
          icon="mdi:chevron-right"
          color="#eaeef0"
          height="48"
          onClick={() => {
            console.log("next");
          }}
        />
      </div>
    </div>
  );
};
