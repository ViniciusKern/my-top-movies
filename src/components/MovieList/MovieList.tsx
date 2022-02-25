import { Info, MovieListContainer } from './MovieList.styles';

import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types/movie.type';

type MovieListProps = {
  movies: Movie[];
  onClick: (index: number) => void;
};

function MovieList(props: MovieListProps) {
  const { movies } = props;

  if (!movies.length) {
    return <Info>No movies found</Info>;
  }

  return (
    <MovieListContainer>
      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie?.id}-${index}`}
          movie={movie}
          index={index}
          showAdditionalInfo={true}
          onClick={props.onClick}
        />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;
