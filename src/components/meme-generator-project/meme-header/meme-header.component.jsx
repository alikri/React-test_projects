import "./meme-header.styles.scss";
import { ReactComponent as MemeLogo } from "../assets-meme-generator/Troll Face.svg"

const MemeHeader = () => {
	return (
		<div>
			<div className="meme-header-container">
				<div className="meme-logo-container">
					<MemeLogo />
					<h2>Meme Generator</h2>
				</div>
				<div className="header-right-side">
				React Course - Project 3
				</div>
			</div>
		</div>
	)
}

export default MemeHeader;