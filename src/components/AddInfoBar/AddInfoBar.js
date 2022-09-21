import { NavLink, useLocation } from 'react-router-dom';
import s from './AddInfoBar.module.css';
export default function AddInfoBar() {
  const location = useLocation();
  return (
    <>
      {' '}
      <nav className={s.addInfoBar}>
        <NavLink
          key={'cast'}
          state={{ from: location?.state?.from }}
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          key={'reviews'}
          state={{ from: location?.state?.from }}
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
