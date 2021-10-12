import React, { useState, useEffect } from "react";
import { movieDetails, movieCredits, movieProviders } from "../utils/list";
import { Provider } from "./Provider";
import { Icon } from "@iconify/react";
import bd_ph from "../assets/bd_ph.jpg";

export const DetailsTop = (props) => {
  const movieID = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");

  useEffect(() => {
    movieDetails(setData, movieID);
  }, [setData, movieID]);

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
  }, [setData, movieID]);

  return (
    <div className="banner__backdrop">
      <img
        src={
          data.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
            : bd_ph
        }
        alt="backdrop"
      ></img>
    </div>
  );
};

export const DetailsBottom = (props) => {
  const movieID = window.location.pathname.split("/")[2];
  const [data, setData] = useState("");
  const [credits, setCredits] = useState("");
  const [providers, setProviders] = useState("");

  useEffect(() => {
    movieDetails(setData, movieID);
    movieCredits(setCredits, movieID);
    movieProviders(setProviders, movieID);
  }, [setData, setCredits, setProviders, movieID]);

  const getRuntime = () => {
    const runtime = Number(data.runtime);
    let output = data.runtime ? `${runtime} minutes` : "";
    return output;
  };

  const getGenres = () => {
    if (data.genres) {
      return data.genres
        .map((el) => el.name)
        .slice(0, 3)
        .join(", ");
    }
  };

  const getCredits = () => {
    if (credits) {
      return credits
        .map((el) => el.name)
        .slice(0, 4)
        .join(", ");
    }
  };

  const getProviders = (arr, type) => {
    if (providers) {
      //   console.log("buy", providers.buy);
      //   console.log("rent", providers.rent);
      //   console.log("stream", providers.flatrate);

      const icons = (arr, type) => {
        return arr
          ? arr.map((obj) => {
              return (
                <Provider
                  src={obj.logo_path}
                  name={obj.provider_name}
                  type={`${type}`}
                />
              );
            })
          : "";
      };

      return icons(arr, type);
    }
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
            <p className="info__content">{getCredits()}</p>
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
            <p className="info__content provider__container">
              {getProviders(providers.flatrate, "stream")}
              {getProviders(providers.buy, "buy")}
              {getProviders(providers.rent, "rent")}
            </p>
          </div>
          <div className="info__btns">
            <a className="info__link" href={data.homepage ? data.homepage : ""}>
              <Icon icon="mdi:open-in-new" color="#eaeef0" height="40" />
            </a>
            <div className="info__add">
              <Icon icon="mdi:plus-box-outline" color="#eaeef0" height="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
