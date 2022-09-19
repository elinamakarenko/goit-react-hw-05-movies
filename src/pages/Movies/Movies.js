import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import fetchSearchMovie from 'services/fetchSearchMovie';
import SearchBar from 'components/SearchBar';
import MovieList from 'components/MovieList';

export default function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearchMovie('search/movie', query)
      .then(response => {
        if (!response) {
          return;
        }
        setMovies(response.results);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [query]);
  const formSubmit = searchValue => {
    setSearchParams(searchValue !== '' ? { query: searchValue } : {});
  };
  return (
    <>
      <SearchBar onSubmit={formSubmit} />
      {query && (
        <MovieList path="" movies={movies} state={{ from: location }} />
      )}
    </>
  );
}
