import { createContext, useState } from 'react';
import { Movie } from '../types/movie.type';

type TopMoviesContext = {
  movies: Movie[];
  showPickerModal: boolean;
  currentMovieIndex: number;
  addMovie: (movie: Movie) => void;
  isMovieAlreadyAdded: (movie: Movie) => boolean;
  openPickerModal: (index: number) => void;
  closePickerModal: () => void;
};

const TopMoviesContext = createContext<TopMoviesContext>({
  movies: [],
  showPickerModal: false,
  currentMovieIndex: 0,
  addMovie: () => {},
  isMovieAlreadyAdded: () => false,
  openPickerModal: () => {},
  closePickerModal: () => {},
});

export function TopMoviesContextProvider(props) {
  const [movies, setMovies] = useState(Array(10).fill(null));
  const [showPickerModal, setShowPickerModal] = useState(false);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const addMovie = (movie: Movie) => {
    setMovies(prevState => {
      const updatedMovies = [...prevState];
      updatedMovies[currentMovieIndex] = movie;
      return updatedMovies;
    });
    setShowPickerModal(false);
  };

  const isMovieAlreadyAdded = (movie: Movie) => {
    return movies.some(
      existingMovie => existingMovie && existingMovie.id === movie.id
    );
  };

  const openPickerModal = (index: number) => {
    setCurrentMovieIndex(index);
    setShowPickerModal(true);
  };

  const closePickerModal = () => setShowPickerModal(false);

  const contextValue = {
    movies,
    showPickerModal,
    currentMovieIndex,
    openPickerModal,
    closePickerModal,
    addMovie,
    isMovieAlreadyAdded,
  };

  return (
    <TopMoviesContext.Provider value={contextValue}>
      {props.children}
    </TopMoviesContext.Provider>
  );
}

export default TopMoviesContext;
