import {
  Backdrop,
  CloseButton,
  Modal,
  ModalHeader,
  SearchInput,
} from './MoviePickerModal.styles';
import { useContext, useEffect, useState } from 'react';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieList from '../MovieList/MovieList';
import MoviesService from '../../services/MoviesService';
import ReactDOM from 'react-dom';
import TopMoviesContext from '../../context/top-movies-context';
import closeImg from '../../assets/close.png';
import { Movie } from '../../types/movie.type';

const modalRoot = document.getElementById('modal-root')!;

function MoviePickerModal() {
  const topMoviesCtx = useContext(TopMoviesContext);

  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const debounceTimeout = setTimeout(() => {
      MoviesService.searchMovie(searchTerm.trim()).then(movies => {
        setMovies(movies);
        setIsLoading(false);
      });
    }, 400);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const onAddMovie = (index: number) => {
    const movie = movies[index];

    if (topMoviesCtx.isMovieAlreadyAdded(movie)) {
      alert('This movie was already added!');
      return;
    }

    topMoviesCtx.addMovie(movies[index]);
  };

  const onCloseModalHandler = () => topMoviesCtx.closePickerModal();

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const modalHeader = (
    <ModalHeader>
      <SearchInput
        autoFocus
        type="text"
        placeholder="Search a movie..."
        onChange={onSearchHandler}
      ></SearchInput>
      <CloseButton onClick={onCloseModalHandler}>
        <img src={closeImg} />
      </CloseButton>
    </ModalHeader>
  );

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onCloseModalHandler} />
      <Modal>
        {modalHeader}
        {isLoading && <LoadingSpinner />}
        {!isLoading && <MovieList movies={movies} onClick={onAddMovie} />}
      </Modal>
    </>,
    modalRoot
  );
}

export default MoviePickerModal;
