import pin from "../pin.png";
function Card(props) {
  return (
    <div className="Card">
      <img className="Card--img" src={props.item.imageUrl} alt="card" />
      <div className="Card--info">
        <div className="Card--info--location">
          <img className="location-pin" src={pin} alt="pin icon" />
          <span className="location-name">{props.item.location}</span>
          <a href={props.item.googleMapsUrl} className="location-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="Card--info--title">{props.item.title}</h1>
        <h2 className="Card--info--Date">
          {props.item.startDate} - {props.item.endDate}
        </h2>
        <p className="Card--info--Description">{props.item.description}</p>
      </div>
    </div>
  );
}
export default Card;
