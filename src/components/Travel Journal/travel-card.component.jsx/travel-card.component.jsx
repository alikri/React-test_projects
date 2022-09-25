import "./travel-card.styles.scss";
import { ReactComponent as LocationSign } from "../travel-assets/Fill 219.svg";
const TravelCard = (props) => {

	const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

	const openInNewTab = url => {
		// 👇️ setting target to _blank with window.open
		window.open(url, '_blank', 'noopener,noreferrer');
	  };

	return (
		<div className="travel-card-container">
			<div className="travel-img-container">
				<img src={imageUrl} alt="" />
			</div>
			<div className="travel-details-container">
				<div className="travel-details-location">
					<LocationSign /> <span className="travel-location">{location }</span>
					<a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
				</div>
				<h2>{title}</h2>
				<span>{startDate} - {endDate}</span>
				<p>{description}</p>
			</div>
			
			
		</div>
	)
};

export default TravelCard;