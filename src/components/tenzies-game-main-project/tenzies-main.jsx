import { useState } from "react";
import "./tenzies.main.styles.scss";
import Die from "./tenzie-die-component/tenzie-die-component";
import { nanoid } from 'nanoid';

const TenziesMain = () => {

	const [dice, setDice] = useState(allNewDice())

	console.log(dice);

	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid()
		}
	}
	function allNewDice(){
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(generateNewDie());
		}
		console.log(arr)
		return arr;
	}

	const rollDice = () => {
		setDice(oldDice => oldDice.map(die => die.isHeld? die: generateNewDie()))
	}

	const holdDice = (id) => {
		setDice(oldDice => oldDice.map(die => die.id === id? {...die, isHeld: !die.isHeld}: die))
	}

	const diceElements = dice.map(die => <Die
		value={die.value}
		key={die.id}
		isHeld={die.isHeld}
		holdDice={() => holdDice(die.id)}
	/>)

	return (
		<main className="tenzies-background">
			<div className="tenzies-main-container">
				<h1 className="tenzie-title">Tenzies</h1>
				<div className="tenzie-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
				<div className="die-container">
					{diceElements}
				</div>
				<button className="dice-btn" onClick={rollDice}>
					Roll
				</button>
			</div>
		</main>

	)
}


export default TenziesMain;