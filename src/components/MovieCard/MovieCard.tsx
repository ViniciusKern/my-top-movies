import {
  MovieContainer,
  PlaceholderContainer,
  PosterImage,
  Rank,
  Title,
} from './MovieCard.styles';

import MovieAdditionalInfo from './MovieAdditionalInfo/MovieAdditionalInfo';
import plusImg from '../../assets/plus.png';
import posterNotAvailable from '../../assets/posterNotAvailable.png';
import { Movie } from '../../types/movie.type';

function MovieCard(props: {
  movie: Movie;
  index: number;
  showAdditionalInfo?: boolean;
  showRank?: boolean;
  onClick: (index: number) => void;
}) {
  const { movie, index } = props;
  const onClickHandler = () => props.onClick(index);

  if (!movie) {
    return (
      <PlaceholderContainer onClick={onClickHandler}>
        <img src={plusImg} />
        <p>Click to add a movie</p>
        <Rank isPlaceholder={true}>{index + 1}</Rank>
      </PlaceholderContainer>
    );
  }

  return (
    <MovieContainer onClick={onClickHandler}>
      <PosterImage src={movie.posterPath ?? posterNotAvailable} />
      {props.showAdditionalInfo && (
        <MovieAdditionalInfo
          voteAverage={movie.voteAverage}
          releaseYear={movie.releaseYear}
        />
      )}
      <Title>{movie.title}</Title>
      {props.showRank && <Rank>{index + 1}</Rank>}
    </MovieContainer>
  );
}

export default MovieCard;
