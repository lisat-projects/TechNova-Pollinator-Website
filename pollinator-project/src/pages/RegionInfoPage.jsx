import { useParams } from "react-router";
import { Link } from "react-router";

export default function StateInfoPage() {
  const params = useParams();
  return (
    <>
      
      <button className="learn-more">
        <Link className="linktext" to="../pollinatormap">Back to Map</Link>
      </button>
      <h1 id="statename">{params.regionName}</h1>

      <h2>Pollinators</h2>
      <h2>Native Plants</h2>
    </>
  );
}
