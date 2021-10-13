import React, { useEffect, useState } from "react";
import { fetchUserMovies } from "../utils/index";
import { Card2 } from "./Card";

const testData = [
  {
    _id: "6162ce18b37ad274f75e1396",
    title: "The Many Saints of Newark",
    api_id: 524369,
    genre_ids: [],
    poster_path: "/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg",
    reviews: [],
    __v: 0,
  },
  {
    _id: "6162ce04b37ad274f75e1392",
    title: "No Time to Die",
    api_id: 370172,
    genre_ids: [],
    poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    reviews: [],
    __v: 0,
  },
  {
    _id: "6162cdf3b37ad274f75e138e",
    title: "The Addams Family 2",
    api_id: 639721,
    genre_ids: [],
    poster_path: "/xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg",
    reviews: [],
    __v: 0,
  },
  {
    _id: "6162cddbb37ad274f75e138a",
    title: "Venom: Let There Be Carnage",
    api_id: 580489,
    genre_ids: [],
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    reviews: [],
    __v: 0,
  },
];

export const UserList = () => {
  const user = "testUser";
  const [data, setData] = useState("");

  useEffect(() => {
    // fetchUserMovies(user, setData);
    setData(testData);
  }, [user, setData]);

  return (
    <div className="search-result">
      <h3 className="search-result__title">
        {data.message ? data.message : "YOUR MOVIES"}
      </h3>
      <ul className="search-result__posters">
        {!data.message
          ? testData.map((obj, i) => {
              return <Card2 key={i} id={obj.api_id} path={obj.poster_path} />;
            })
          : ""}
      </ul>
    </div>
  );
};
