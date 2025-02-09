import { Link } from "react-router";
import InfoBox from "../components/InfoBox";
//import beesImg from "../assets/bees_flower.jpg";
import plantIcon from "../assets/plant.png";
import bugIcon from "../assets/bug.png";
import climateIcon from '../assets/global-warming.png'

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
        <div id="infocontainer">
          <InfoBox
            title="Decreasing Habitats"
            image={plantIcon}
            alt="Graphic of a potted plant"
          >
            <p>Decreasing</p>
          </InfoBox>
          <InfoBox title="Invasive Species" image={bugIcon} alt="Icon of a bug">
            <p></p>
          </InfoBox>
          <InfoBox title="Climate Change" image={climateIcon} alt="Icon of the Earth">
            <p></p>
          </InfoBox>
          
        </div>

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
