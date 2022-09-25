import "./airbnb-header.styles.scss";
import { ReactComponent as AirbnbLogo } from "../airbnb-assets/airbnbLogo.svg";

const AirbnbHeader = () => {
	return (
		<div className="airbnb-container-main">
			<div className="airbnb-container">
			<div className="airbnb-logo-container">
				<AirbnbLogo />
			</div>
		</div>
		</div>
		
	)
}

export default AirbnbHeader;