import { NavLink } from 'react-router-dom';
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
