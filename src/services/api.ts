import type { Movie } from "../Pages/Home";

const API_KEY = "716df6182b1577e864baffebdda8829c";
const BASE_URL = "https://api.themoviedb.org/3";

interface TMDBResponse {
  results: Movie[];
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data: TMDBResponse = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );

  const data: TMDBResponse = await response.json();
  return data.results;
};
