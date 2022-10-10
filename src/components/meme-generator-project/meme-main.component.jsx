import "./meme-main.styles.scss";
import MemeHeader from "./meme-header/meme-header.component";
import MemeForm from "./meme-form/meme-form.component";

const MemeMain = () => {
	return (
		<div className="meme-main-container">
			<MemeHeader />
			<MemeForm />
		</div>
	)
}

export default MemeMain;