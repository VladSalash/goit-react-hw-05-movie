import axios from 'axios';

const API_KEY = '9e618eee0b448f62a9e21dcfe5288ef5';
const BASE_URL = `https://api.themoviedb.org/3`;

export async function fetchMoviesTrending() {
  return await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
}

export async function fetchSearchMovies(movieName) {
  return await axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}&page=1`
  );
}

export async function fetchMovieDetails(movie_id) {
  return await axios(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieCredits(movie_id) {
  return await axios(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieReviews(movie_id) {
  return await axios(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
