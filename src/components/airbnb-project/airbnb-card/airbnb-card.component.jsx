import "./airbnb-card.styles.scss";
// import Katie from "../assets/image 12.png";
import { ReactComponent as Star } from "../assets/Star 1.svg";

const AirbnbCard = (props) => {
	const { price, coverImg, title, location, openSpots } = props;
	const { review, rating } = props.stats;

	let badgeText
	if (openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (location === "Online") {
		badgeText ="ONLINE"
	}
	return (
		<div className="airbnb-container">
			<div className="airbnb-card-container">
			{ badgeText && <div className="sold-out">{badgeText}</div>}
					<div className="card-pic-container">
						<img src={coverImg} alt="" />
					</div>
					<div className="airbnb-card-details">
						<div className="card-ratings">
							<Star /> <span>{rating}</span><p>({review}) • {location}</p>
						</div>
						<div className="card-short-description">
							{title}
						</div>
						<div className="card-price">
							<span>From ${price} /</span> person
						</div>
					</div>
				</div>
		</div>
	)
};

export default AirbnbCard;