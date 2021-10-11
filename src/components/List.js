import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { BrowserRouter as Link } from "react-router-dom";

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

  const movePage = (el, direction, distance) => {
    const posters = el.closest(".list").querySelector(".list__posters");
    const listItemCount = posters.querySelectorAll(".list__item").length;
    let moveDistance =
      Number(
        posters
          .querySelector(".list__item")
          .style.transform.replace(/[^0-9]/g, "")
          ? posters
              .querySelector(".list__item")
              .style.transform.replace(/[^0-9]/g, "")
          : 0
      ) / 100;

    if (listItemCount / moveDistance >= 1.32 && direction === "next") {
      posters.querySelectorAll(".list__item").forEach((el, i) => {
        el.style.transform = `translateX( -${
          (moveDistance + distance) * 100
        }%)`;
      });
    }

    if (direction !== "next" && moveDistance >= 0) {
      posters.querySelectorAll(".list__item").forEach((el, i) => {
        el.style.transform = `translateX( -${
          (moveDistance - distance) * 100
        }%)`;
      });
    }
  };

  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>

      <div
        className="list__btn--prev"
        onClick={(e) => {
          movePage(e.target, "prev", 3);
        }}
      >
        <Icon
          className="list__btn--icon"
          icon="mdi:chevron-left"
          color="#eaeef0"
          height="48"
        />
      </div>
      <div
        className="list__btn--next"
        onClick={(e) => {
          movePage(e.target, "next", 3);
        }}
      >
        <Icon
          className="list__btn--icon"
          icon="mdi:chevron-right"
          color="#eaeef0"
          height="48"
        />
      </div>

      <ul className="list__posters">
        {data !== ""
          ? data.map((obj, i) => {
              return (
                <a className="list__item" key={i} href={`/movies/${obj.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                    alt="img"
                  ></img>
                </a>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
