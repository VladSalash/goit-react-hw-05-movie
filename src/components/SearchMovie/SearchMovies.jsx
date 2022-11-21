import SearchMovieItem from './SearchMovieItem';
import { MovieList } from './SearchMovies.styled.js';

export default function SearchMovies({ movies }) {
  return (
    <MovieList>
      {movies.map(({ id, original_title }) => (
        <SearchMovieItem key={id} id={id} original_title={original_title} />
      ))}
    </MovieList>
  );
}
