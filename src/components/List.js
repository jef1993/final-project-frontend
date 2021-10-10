import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { trendingMovie } from "../utils/index";

export const List = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    trendingMovie(setData);
    console.log(data.results[0].poster_path);
  }, [setData]);

  return (
    <div className="list">
      <h3 className="list__title">{props.title}</h3>

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
          ? data.results.map((obj) => {
              return (
                <li className="list__item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                    alt="img"
                  ></img>
                </li>
              );
            })
          : ""}

        {/* <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li>
        <li className="list__item">item</li> */}
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
