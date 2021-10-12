import React from "react";

export const Provider = (props) => {
  return (
    <div className="provider">
      <div className="provider__box">
        <img
          className="provider__img"
          src={`https://image.tmdb.org/t/p/original${props.src}`}
          alt={`${props.name}`}
        ></img>
        <div className="provider__text">{props.type}</div>
        <div className="provider__name">
          <div className="provider__name-box">{props.name}</div>
        </div>
      </div>
    </div>
  );
};
