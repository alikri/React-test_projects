import "./digital-card-final.styles.scss";
import About from "./about/about.component";
import Info from "./info/info.component";
import Interests from "./interests/interests.component";
import Footer
	from "./footer/footer.component";
const DigitalCard = () => {
	return (
		<div className="digital-card-container">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	)
}

export default DigitalCard;