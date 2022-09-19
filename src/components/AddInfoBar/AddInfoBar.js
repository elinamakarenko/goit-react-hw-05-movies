import { NavLink } from 'react-router-dom';
import s from './AddInfoBar.module.css';
export default function AddInfoBar({ state }) {
  return (
    <>
      {' '}
      <nav className={s.addInfoBar}>
        <NavLink
          key={'cast'}
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          key={'reviews'}
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
    </>
  );
}
