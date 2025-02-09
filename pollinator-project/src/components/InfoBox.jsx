export default function InfoBox({image, alt, title, children}) {
    return  <div id="info-item">
      {image && <img className="info-image" src={image} alt={alt} />}
    <h3 id="info-title">{title}</h3>
    {children}
  </div>
}