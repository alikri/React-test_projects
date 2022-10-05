import "./meme-form.styles.scss";
import memeData from "../../../memesData";
import { useState, useEffect } from "react";


const MemeForm = () => {

	const [meme, setMeme] = useState(
		{
		topText: "",
        bottomText: "",
        randomImage: "" 
		}
	)
	const [memeImages, setMemeImages] = useState([]);

	useEffect(() => {
		getData();
	})

	async function getData() {
		const response = await fetch("https://api.imgflip.com/get_memes");
		const data = await response.json();
		setMemeImages(data.data.memes);
	}
	const handleChange = (event) => {
		const {name, value } = event.target
		setMeme(prevValue => ({
			...prevValue,
			[name]: value
		}))
	}
	
	const randomUrl = () => {
		const memeImage = memeImages[Math.floor(Math.random() * memeImages.length)].url;
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
				<input
					type="text"
					className="meme-form-input"
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					className="meme-form-input"
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className="meme-form-btn" onClick={randomUrl}>Get a new meme image 🖼</button>
			</div>
			<div className="meme-image-wrapper">
				<h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
				<img src={`${meme.randomImage}`} alt="" />
				
			</div>
		</main>
	)
}

export default MemeForm;