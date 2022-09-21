import "./footer.styles.scss";
import Twitter from "../assets/24.png";
import Inst from "../assets/inst.png";
import Fb from "../assets/fb.png";
const Footer = () => {
	return (
		<div className="footer-container">
			<img className="social-icon" src={Twitter} alt="" />
			<img className="social-icon" src={Inst} alt="" />
			<img className="social-icon" src={Fb} alt="" />
		</div>
	)
}

export default Footer;