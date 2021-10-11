import React, { useState, useEffect } from "react";
import { movieDetails } from "../utils/list";
import { Icon } from "@iconify/react";

export const DetailsTop = (props) => {
  const movieID = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");

  useEffect(() => {
    movieDetails(setData, movieID);
  }, []);

  return (
    <div className="banner__box details">
      <h1 className="details__title">{data.original_title}</h1>
      <p className="details__tagline">{data.tagline ? data.tagline : ""}</p>
    </div>
  );
};

export const DetailsBackdrop = (props) => {
  const movieID = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");

  useEffect(() => {
    movieDetails(setData, movieID);
  }, []);

  return (
    <div className="banner__backdrop">
      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt="backdrop"
      ></img>
    </div>
  );
};

export const DetailsBottom = (props) => {
  const movieID = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");

  useEffect(() => {
    movieDetails(setData, movieID);
  }, [setData]);

  const getRuntime = () => {
    const runtime = Number(data.runtime);
    let output = data.runtime ? `${runtime} minutes` : "";
    return output;
  };

  const getGenres = () => {
    if (data.genres) return `${data.genres[0].name}, ${data.genres[1].name}`;
  };

  return (
    <div className="info">
      <div className="info__area">
        <div className="info__poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="poster"
          ></img>
        </div>
        <div className="info__container">
          <div className="info__overview">
            <h3 className="info__title">Overview</h3>
            <p className="info__content">
              {data.overview ? data.overview : ""}
            </p>
          </div>
          <div className="info__release">
            <h3 className="info__title">Release date</h3>
            <p className="info__content">{data.release_date}</p>
          </div>
          <div className="info__starring">
            <h3 className="info__title">Starring</h3>
            <p className="info__content"></p>
          </div>
          <div className="info__length">
            <h3 className="info__title">Length</h3>
            <p className="info__content">{getRuntime()}</p>
          </div>
          <div className="info__genres">
            <h3 className="info__title">genres</h3>
            <p className="info__content">{getGenres()}</p>
          </div>
          <div className="info__avaliable">
            <h3 className="info__title">Avaliable on:</h3>
            <p className="info__content"></p>
          </div>
          <div className="info__btns">
            <a className="info__link" href={data.homepage ? data.homepage : ""}>
              <Icon icon="mdi:open-in-new" color="#eaeef0" height="48" />
            </a>
            <div className="info__add">
              <Icon icon="mdi:plus-box-outline" color="#eaeef0" height="48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
