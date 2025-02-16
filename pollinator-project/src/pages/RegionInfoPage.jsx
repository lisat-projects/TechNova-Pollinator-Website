import { useParams } from "react-router";
import { Link } from "react-router";
import InfoTable from "../components/InfoTable";

const dummy_data = [
  {
    "SCIENTIFIC NAME": "Agastache foeniculum\u01ab",
    "COMMON NAME": "Blue giant hyssop",
    "BLOOM": "Jul\u2013Oct",
    "LIFE": "P",
    "FORM": "a",
    "SUN": "\u025d \u025e",
    "SOIL": "D",
    "ADDITIONAL DETAILS \u017e": "\u00cc \u00d8 P"
  },
  {
    "SCIENTIFIC NAME": "Agastache scrophulariifolia",
    "COMMON NAME": "Purple giant hyssop",
    "BLOOM": "Jul\u2013Sep",
    "LIFE": "p",
    "FORM": "a",
    "SUN": "\u025d \u025e \u025f",
    "SOIL": "D\u2013M",
    "ADDITIONAL DETAILS \u017e": "\u00cc \u00d8"
  },
  {
    "SCIENTIFIC NAME": "Amelanchier laevis\u01ab",
    "COMMON NAME": "Allegheny serviceberry",
    "BLOOM": "Mar\u2013May",
    "LIFE": "P",
    "FORM": "c b",
    "SUN": "\u025d \u025e \u025f",
    "SOIL": "D\u2013M",
    "ADDITIONAL DETAILS \u017e": "F \u00cc"
  },
  {
    "SCIENTIFIC NAME": "Amorpha canescens",
    "COMMON NAME": "Leadplant",
    "BLOOM": "Jun\u2013Aug",
    "LIFE": "P",
    "FORM": "b",
    "SUN": "\u025d \u025e",
    "SOIL": "D\u2013M",
    "ADDITIONAL DETAILS \u017e": "F \u00d6 \u00cc \u00d8 \u00cb"
  },
  {
    "SCIENTIFIC NAME": "Amorpha canescens\u01ab",
    "COMMON NAME": "Leadplant",
    "BLOOM": "Jun\u2013Aug",
    "LIFE": "P",
    "FORM": "b",
    "SUN": "\u025d \u025e",
    "SOIL": "D",
    "ADDITIONAL DETAILS \u017e": "F \u00d6 \u00cc \u00d8 \u00cb"
  },
  {
    "SCIENTIFIC NAME": "Anemone canadensis",
    "COMMON NAME": "Canadian anemone",
    "BLOOM": "MAy\u2013Jul",
    "LIFE": "P",
    "FORM": "a",
    "SUN": "\u025d \u025e \u025f",
    "SOIL": "M\u2013W",
    "ADDITIONAL DETAILS \u017e": "\u00cc"
  },
  {
    "SCIENTIFIC NAME": "Anemone cylindrica\u01ab",
    "COMMON NAME": "Candle anemone",
    "BLOOM": "Jun\u2013Jul",
    "LIFE": "P",
    "FORM": "a",
    "SUN": "\u025d",
    "SOIL": "D",
    "ADDITIONAL DETAILS \u017e": "\u00cc"
  },]


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
        
        <InfoTable data={dummy_data}></InfoTable>
    </>
  );
}