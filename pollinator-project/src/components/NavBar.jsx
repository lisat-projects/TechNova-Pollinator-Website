import { NavLink } from "react-router"

export default function NavBar() {
    return <nav className="nav-bar">
    <li>
      <NavLink to="/" className="navtext">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="pollinatormap" className="navtext">
        Pollinator Map
      </NavLink>
    </li>
  </nav>
}