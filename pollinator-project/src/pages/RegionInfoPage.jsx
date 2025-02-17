import { useParams } from "react-router";
import { Link } from "react-router";
import InfoTable from "../components/InfoTable";
import { useEffect, useState } from "react";
import getPlantData from "../../plantdata/plantDataGetter";

export default function StateInfoPage() {
  const params = useParams();
  const [regionData, setRegionData] = useState([]);
 useEffect(() => {
  async function fetchData() {
    const data = await getPlantData(params.regionName);
    setRegionData(data);
  }
  fetchData();
    
 }, [params])

  return (
    <>
      
      <button className="learn-more">
        <Link className="linktext" to="../pollinatormap">Back to Map</Link>
      </button>
      <h1 id="statename">{params.regionName}</h1>
      <h2>Pollinators</h2>
      <h2>Native Plants</h2>
       <InfoTable data={regionData}></InfoTable>
    </>
  );
}