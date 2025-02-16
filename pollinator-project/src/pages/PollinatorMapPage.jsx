import { useState } from "react";
import RegionalMap from "../components/RegionalMap";
import { useNavigate} from "react-router-dom";

export default function PollinatorMapPage() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const navigate = useNavigate();

  function handleRegionClick() {
    console.log(selectedRegion + " clicked");
    navigate("../" + selectedRegion)
  }

  return (
    <>
      <div className="page-title">
        <h1 className="title">Pollinators and Native Plants Across the U.S.</h1>
        <p className="subtitle">
          Select a region to learn more about its pollinators and native plants:
        </p>
      </div>
      <RegionalMap
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        handleClick={handleRegionClick}
      />
      <div>
        <p id="statename"></p>
        <a href=":statename" className="view-info">
          View Info
        </a>
      </div>
    </>
  );
}
