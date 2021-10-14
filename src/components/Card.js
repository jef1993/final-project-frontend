import React from "react";
import card_ph from "../assets/card_ph.png";
import { useHistory } from "react-router-dom";

export const Card = (props) => {
  const history = useHistory();
  const historyBtn = (path) => history.push(`${path}`);
  return (
    <div
      className="list__item"
      key={props.key}
      onClick={(e) => {
        e.preventDefault();
        historyBtn(`/movies/${props.id}`);
      }}
    >
      <img
        src={
          props.path ? `https://image.tmdb.org/t/p/w500${props.path}` : card_ph
        }
        alt="img"
      ></img>
    </div>
  );
};

export const Card2 = (props) => {
  const history = useHistory();
  const historyBtn = (path) => history.push(`${path}`);
  return (
    <div
      className="list__item"
      key={props.key}
      onClick={(e) => {
        e.preventDefault();
        historyBtn(`/movies/${props.id}`);
      }}
    >
      <img
        src={
          props.path ? `https://image.tmdb.org/t/p/w500${props.path}` : card_ph
        }
        alt="img"
      ></img>
    </div>
  );
};

// export default Card
