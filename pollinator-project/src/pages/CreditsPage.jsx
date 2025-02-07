export default function CreditsPage() {
  return (
    <>
      
      <h1>Credits</h1>

      <ul>
        <p>Images</p>

        <a
          href="https://www.cnn.com/2020/01/28/us/best-flowers-for-bees-conservation-study-scn/index.html"
          className="credits"
          target="_blank"
        >
          Bees on Flower
        </a>
        <a
          href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg"
          className="credits"
          target="_blank"
        >
          SVG of US Map
        </a>

        <p>Facts about pollinators</p>

        <a
          href="https://projectdragonfly.miamioh.edu/great-pollinator-project/conservation/major-threats-to-pollinators/"
          className="credits"
          target="_blank"
        >
          Major Threats to Pollinators
        </a>
      </ul>

      <hr />
      <ul className="links">
        <li>
          <a href="credits.html" className="linktext">
            credits
          </a>
        </li>
      </ul>
    </>
  );
}
