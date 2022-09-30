import "./meme-form.styles.scss";
import memeData from "../../../memesData";
import { useState } from "react";


const MemeForm = () => {

	const [meme, setMeme] = useState(
		{
		topText: "",
        bottomText: "",
        randomImage: "" 
		}
	)
	const [memeImages, setMemeImages] = useState(memeData);
	
	const randomUrl = () => {
		const memeArray = memeImages.data.memes; 
		const memeImage = memeArray[Math.floor(Math.random() * memeArray.length)].url;
		setMeme((prevValue) => (
			{
				...prevValue,
				randomImage: memeImage
			
			}
		));
		
	}

	return (
		<main>
			<div className="meme-form">
				<input type="text" className="meme-form-input" placeholder="Top text"/>
				<input type="text" className="meme-form-input"placeholder="Bottom text"/>
				<button className="meme-form-btn" onClick={randomUrl}>Get a new meme image 🖼</button>
			</div>
			<div className="meme-image-wrapper">
				<img src={`${meme.randomImage}`} alt="" />
			</div>
		</main>
	)
}

export default MemeForm;