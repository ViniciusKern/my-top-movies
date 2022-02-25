import TopMovies from './components/TopMovies/TopMovies';
import { TopMoviesContextProvider } from './context/top-movies-context';

function App() {
  return (
    <TopMoviesContextProvider>
      <TopMovies />
    </TopMoviesContextProvider>
  );
}

export default App;
