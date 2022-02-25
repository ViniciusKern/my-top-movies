import MovieCard from '../MovieCard/MovieCard';
import MoviePickerModal from '../MoviePickerModal/MoviePickerModal';
import {
  ApiAttributionLogo,
  Footer,
  Header,
  TopMoviesContainer,
} from './TopMovies.styles';
import TopMoviesContext from '../../context/top-movies-context';
import { useContext } from 'react';
import theMovieDbLogo from '../../assets/themoviedb.svg';

function TopMovies() {
  const topMoviesCtx = useContext(TopMoviesContext);

  const onClickMovieHandler = (index: number) => {
    topMoviesCtx.openPickerModal(index);
  };

  return (
    <>
      {topMoviesCtx.showPickerModal && <MoviePickerModal />}
      <Header>My Top Movies</Header>
      <TopMoviesContainer>
        {topMoviesCtx.movies.map((movie, index) => (
          <MovieCard
            key={`${movie?.id}-${index}`}
            index={index}
            movie={movie}
            showRank={true}
            onClick={onClickMovieHandler}
          />
        ))}
      </TopMoviesContainer>
      <Footer>
        <ApiAttributionLogo src={theMovieDbLogo} />
      </Footer>
    </>
  );
}

export default TopMovies;
