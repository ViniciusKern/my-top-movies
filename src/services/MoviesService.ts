import { Movie } from '../types/movie.type';

class MoviesService {
  private readonly API_KEY = '8ae6c2cf72a58f068628e6fa42082e85';
  private readonly API_BASE_URL = 'https://api.themoviedb.org/3';
  private readonly POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w300';

  public async searchMovie(searchTerm: string): Promise<Movie[]> {
    if (!searchTerm.length) {
      return this.popularMovies();
    }

    return this.fetchMovies('search/movie', [`query=${searchTerm}`]);
  }

  public async popularMovies(): Promise<Movie[]> {
    return this.fetchMovies('movie/popular');
  }

  private async fetchMovies(
    endpoint: string,
    queryParams: string[] = []
  ): Promise<Movie[]> {
    queryParams = queryParams.concat(`api_key=${this.API_KEY}`);

    const url = `${this.API_BASE_URL}/${endpoint}?${queryParams.join('&')}`;

    const json = await fetch(url).then(res => res.json());

    return json.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path
          ? `${this.POSTER_BASE_URL}/${movie.poster_path}`
          : null,
        voteAverage: movie.vote_average,
        releaseYear: movie.release_date
          ? movie.release_date.substr(0, 4)
          : 'n/a',
      };
    });
  }
}

export default new MoviesService();
