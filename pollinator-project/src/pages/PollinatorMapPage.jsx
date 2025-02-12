import RegionalMap from "../components/RegionalMap";

export default function PollinatorMapPage() {
  return (
    <>
      <div className="page-title">
        <h1 className="title">Pollinators and Native Plants Across the U.S.</h1>
        <p className="subtitle">
          Select a state to learn more about its pollinators and native plants:
        </p>
      </div>
      <RegionalMap/>
      <div>
        <p id="statename">State Name</p>
        <a href=":statename" className="view-info">
          View Info
        </a>
      </div>
    </>
  );
}
