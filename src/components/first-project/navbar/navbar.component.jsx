import "./navbar.styles.scss";
import Logo from "../../../assets/logo512.png"
const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="header-container">
				<div className="logo-container">
					<img src={Logo} alt="" />
					<h2>ReactFacts</h2>
				</div>
				<h3>React Course - Project 1</h3>
			</div>
		</div>


	)
}

export default NavBar;