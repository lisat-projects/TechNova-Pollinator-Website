import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navtext-active" : "navtext"
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="pollinatormap"
          className={({ isActive }) =>
            isActive ? "navtext-active" : "navtext"
          }
        >
          Pollinator Map
        </NavLink>
      </li>
    </nav>
  );
}
