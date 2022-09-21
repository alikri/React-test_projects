import "./info.styles.scss";
import ProfilePic from "../assets/Rectangle 90.png";

const Info = () => {
	return (
		<div className="info-container">
			<div className="profile-img-container">
				<img className="profile-img" src={ProfilePic} alt="" />
			</div>
			<div className="info-details">
				<h1>Allison Blake</h1>
				<h4>Frontend Developer</h4>
				<p>allisonsmith@gmail.com</p>
				<button className="btn-white">Email</button>
				<button className="btn-blue">LinkedIn</button>
			</div>
		</div>
	)
}

export default Info;