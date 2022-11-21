import PropTypes, { shape } from 'prop-types';
import {
  Container,
  ImgContainer,
  ContentContainer,
} from './MovieCard.styled.js';

export default function MovieDetails({ movies }) {
  const { id, poster_path, original_title, vote_average, overview, genres } =
    movies;

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';
  const DEFAUTL_IMG =
    'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg';

  return (
    <Container key={id}>
      <ImgContainer>
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : `${DEFAUTL_IMG}`}
          alt={original_title}
        />
      </ImgContainer>

      <ContentContainer>
        <h1>{original_title}</h1>
        <p>User score: {vote_average.toFixed(1)}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Container>
  );
}

MovieDetails.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
