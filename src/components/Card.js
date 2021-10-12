import React from "react";
import card_ph from "../assets/card_ph.png";

export const Card = (props) => {
  return (
    <a className="list__item" key={props.index} href={`/movies/${props.id}`}>
      <img
        src={
          props.path ? `https://image.tmdb.org/t/p/w500${props.path}` : card_ph
        }
        alt="img"
      ></img>
    </a>
  );
};

export const Card2 = (props) => {
  return (
    <a
      className="search-result__item"
      key={props.index}
      href={`/movies/${props.id}`}
    >
      <img
        src={
          props.path ? `https://image.tmdb.org/t/p/w500${props.path}` : card_ph
        }
        alt="img"
      ></img>
    </a>
  );
};

// export default Card
