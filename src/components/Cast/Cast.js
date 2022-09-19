import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchTheMoviedb from 'services/fetchTheMoviedb';
import s from './Cast.module.css';
export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchTheMoviedb(`movie/${movieId}/credits`)
      .then(response => {
        if (!response) {
          return;
        }
        setCast(response.cast);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [movieId]);
  if (!cast) {
    return null;
  }
  return (
    <ul className={s.cast}>
      {' '}
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id} className={s.list}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          ></img>
          <div>
            {' '}
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
