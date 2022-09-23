import "./airbnb-main.styles.scss";
import AirbnbHeader from "./airbnb-header/airbnb-header.component";
import AirbnbHome from "./airbnb-home/airbnb-home.component";
import AirbnbCard from "./airbnb-card/airbnb-card.component";
// import KatiePic from "./assets/image 12.png";
import cardData from "./data";

const AirbnbMain = () => {
	const cardInfo = cardData.map(card => <AirbnbCard
		key={card.id}
		{...card}
		// this way is the same as 
		// title={card.title}
		// country={card.location}
		// the only difference - you need to pass the exasct name of the props

	/>) 
	return (
		<div className="airbnb-main-body">
			<AirbnbHeader />
			<AirbnbHome />
			<div className="card-wrapper">
			{cardInfo}
			</div>
			
		</div>
	)
}

export default AirbnbMain;