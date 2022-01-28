// require("dotenv").config();
const movieAPIKey = process.env.REACT_APP_API_KEY;
console.log(movieAPIKey);

export const trendingMovies = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieAPIKey}`,

      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const nowPlaying = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieAPIKey}&language=en-GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const topRated = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${movieAPIKey}&region=GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const upComingMovies = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieAPIKey}&region=GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const movieDetails = async (setter, movieID) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${movieAPIKey}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data);
  } catch (error) {
    console.log(error);
  }
};

export const movieCredits = async (setter, movieID) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${movieAPIKey}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.cast);
  } catch (error) {
    console.log(error);
  }
};

export const movieProviders = async (setter, movieID) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${movieAPIKey}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results["GB"] ? data.results["GB"] : "");
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async (setter, query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${movieAPIKey}&query=${query}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results ? data.results : "");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
