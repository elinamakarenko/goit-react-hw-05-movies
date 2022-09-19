import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './AppBar.module.css';
export default function AppBar() {
  return (
    <>
      <nav className={s.appBar}>
        <NavLink
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}
