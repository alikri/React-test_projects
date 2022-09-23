import "./airbnb-home.component.scss";
import GridPic from "../assets/Group 77.png";

const AirbnbHome = () => {
	return (
		<div className="airbnb-container">
			<div className="grid-pic-container">
				<img src={GridPic} alt="" />
			</div>
			<div className="airbnb-home-text-container">
				<h1>Online Experiences</h1>
				<p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
		</div>
	)
};

export default AirbnbHome;