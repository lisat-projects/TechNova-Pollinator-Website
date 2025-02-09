export default function InfoBox({title, children}) {
    return  <div id="info-item">
    <h3 id="info-title">{title}</h3>
    {children}
  </div>
}