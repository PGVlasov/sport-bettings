import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <NavLink to="/" className="brand-logo">
          Sport Bettings
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">MainPage</NavLink>
          </li>
          <li>
            <NavLink to="/createEvent">CreateEvent</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Auth</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
