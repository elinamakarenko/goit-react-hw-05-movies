import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';
export default function MovieList({ path, movies, state }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${path}${id}`} state={state} className={s.link}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
MovieList.propTypes = {
  path: PropTypes.string,
  movies: PropTypes.array,
  state: PropTypes.object,
};
