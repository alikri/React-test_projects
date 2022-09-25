import "./travel-header.styles.scss";
import { ReactComponent as Logo } from "../travel-assets/Fill 213.svg";

const TravelHeader = () => {
	return (
		<div className="travel-header-container">
			<Logo />
			<h2>my travel journal.</h2>
		</div>
		
	)
}

export default TravelHeader;