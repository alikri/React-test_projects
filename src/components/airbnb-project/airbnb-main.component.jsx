import "./airbnb-main.styles.scss";
import AirbnbHeader from "./airbnb-header/airbnb-header.component";
import AirbnbHome from "./airbnb-home/airbnb-home.component";
import AirbnbCard from "./airbnb-card/airbnb-card.component";
import KatiePic from "./airbnb-assets/images/katie-zaferes.png";
import WeddingPhotos from "./airbnb-assets/images/wedding-photography.png";
import BikeRide from "./airbnb-assets/images/mountain-bike.png";


const AirbnbMain = () => {

	const cardData = [
		{
			id: 1,
			title: "Life Lessons with Katie Zaferes",
			description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
			price: 136,
			coverImg: `${KatiePic}`,
			stats: {
				rating: 5.0,
				reviewCount: 6
			},
			location: "Online",
			openSpots: 0,
		},
		{
			id: 2,
			title: "Learn Wedding Photography",
			description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
			price: 125,
			coverImg: `${WeddingPhotos}`,
			stats: {
				rating: 5.0,
				reviewCount: 30
			},
			location: "Online",
			openSpots: 27,
		},
		{
			id: 3,
			title: "Group Mountain Biking",
			description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
			price: 50,
			coverImg: `${BikeRide}`,
			stats: {
				rating: 4.8,
				reviewCount: 2
			},
			location: "Norway",
			openSpots: 3,
		}
	];
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