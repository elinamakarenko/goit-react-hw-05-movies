import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fetchTheMoviedb from 'services/fetchTheMoviedb';
import AppBar from '../AppBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTheMoviedb('trending/movie/day')
      .then(({ results }) => {
        if (!results) {
          return;
        }
        setMovies(results);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <>
      <AppBar />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
