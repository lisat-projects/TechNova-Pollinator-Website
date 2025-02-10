import { Link } from "react-router"

export default function FooterLinks() {
    return <div className="links-container">
        <ul className="links">
    <li>
      <Link to="credits" className="linktext">
        Credits
      </Link>
    </li>
  </ul>
    </div>
}