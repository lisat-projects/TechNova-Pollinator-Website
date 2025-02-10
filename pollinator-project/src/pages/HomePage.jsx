import { Link } from "react-router";
import InfoBox from "../components/InfoBox";
//import beesImg from "../assets/bees_flower.jpg";
import plantIcon from "../assets/plant.png";
import bugIcon from "../assets/bug.png";
import climateIcon from "../assets/global-warming.png";

export default function HomePage() {
  return (
    <>
      {/*<div className="panel">
        <div className="square">
          <h1 className="header">Find information on pollinators</h1>
        </div>

        <img src={beesImg} alt="Two bees sitting on flower" className="bees" />
      </div>*/}

      <div className="about-page">
        <h1 id="about">About</h1>
        <div className="container">
          <h2>
            Native pollinators serve a very important purpose in the ecosystem.
            Animals like bees, butterflies, birds, and bats are crucial in
            helping native plants reproduce. Many of the crops we eat also
            depend on pollinators.
          </h2>
          <h2>
            Unfortunately, native pollinators are often affected by human
            activity.
          </h2>
        </div>

        <hr />

        <h1 id="about">Problems affecting native pollinators</h1>
        <div id="infocontainer">
          <InfoBox
            title="Decreasing Habitats"
            image={plantIcon}
            alt="Graphic of a potted plant"
          >
            <p>
              Increased human activity in natural areas can lead to loss of
              pollinator habitats. Human development such as building roads,
              houses, lawns, and farms decreases the availability of native
              plants for pollinators. This leads to drastic declines in their
              population.
            </p>
          </InfoBox>
          <InfoBox title="Invasive Species" image={bugIcon} alt="Icon of a bug">
            <p>
              Invasive species will crowd out native plants, causing the native
              pollinator population to dwindle. Additionally, non-native plants
              introduced by humans often take up space that was formerly
              occupied by plants used by native pollinators.
            </p>
          </InfoBox>
          <InfoBox
            title="Climate Change"
            image={climateIcon}
            alt="Icon of the Earth"
          >
            <p>
              Climate change leads to increased temperatures and changes in
              weather. This can affect the entire ecosystem, including native
              plants and pollinators.{" "}
            </p>
          </InfoBox>
        </div>

        <hr />

        <h1 id="about">Ways to help</h1>
        <div className="container">
          <h2>
            One way to help pollinators is by planting native plants in your
            backyard. This site helps you easily find resources and information
            so you can help your local pollinators. 
          </h2>
          <Link to="pollinatormap">
            <button>Get Started</button>
          </Link>
        </div>
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
