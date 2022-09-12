import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export default function AppBar() {
  return (
    <div className={s.appBar}>
      {navItems.map(({ href, text }) => (
        <NavLink
          className={({ isActive }) =>
            !isActive ? `${s.navLink}` : `${s.activeNavLink}`
          }
          to={href}
          key={href}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}
