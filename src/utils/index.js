export const trendingMovie = async (setter) => {
  try {
    const response = await fetch(
      //   `${process.env.MOV_API_URL}/trending/movie/week?api_key=${process.env.MOV_API_KEY}`,
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b7cb96b2c3e86cd23a777c56ffafe65c`,

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
