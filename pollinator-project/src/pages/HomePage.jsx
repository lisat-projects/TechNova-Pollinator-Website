
import { Link } from "react-router";
import beesImg from "../assets/bees_flower.jpg";

export default function HomePage() {
  return (
    <>
      <div className="panel">
        <div className="square">
          <h1 className="header">Find information on pollinators</h1>
          <button id="learn-more" className="learn-more">
            <h1>Learn More</h1>
          </button>
        </div>

        <img src={beesImg} alt="Two bees sitting on flower" className="bees" />
      </div>

      <div className="about-page">
        <h2 id="about">About</h2>
        <p>
          Native pollinators serve a very important purpose in the ecosystem.
          Animals like bees, butterflies, birds, and bats are crucial in helping
          native plants reproduce. Many of the crops we eat also depend on
          pollinators.
        </p>
        <p>
          Unfortunately, native pollinators are often affected by human
          activity.
        </p>
        <div id="factors"></div>

        <p>
          One way to help pollinators is by planting native plants in your
          backyard. This site helps you easily find resources and information so
          you can help your local pollinators.
        </p>
      </div>

      <ul className="links">
        <li>
          <Link to="credits" className="linktext">
            credits
          </Link>
        </li>
      </ul>
      <script src="script.js"></script>
    </>
  );
}
