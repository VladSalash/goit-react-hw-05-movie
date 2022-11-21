import TrendingItem from './TrendingItem';

import { TrendingTitle, TrendingList } from './TrendingMovies.styled';

export default function TrendingMovies({ movies }) {
  return (
    <div>
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingList>
        {movies.map(({ id, original_title }) => (
          <TrendingItem key={id} id={id} original_title={original_title} />
        ))}
      </TrendingList>
    </div>
  );
}
