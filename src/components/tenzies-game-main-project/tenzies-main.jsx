import { useState, useEffect} from "react";
import "./tenzies.main.styles.scss";
import Die from "./tenzie-die-component/tenzie-die-component";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const TenziesMain = () => {

	const [dice, setDice] = useState(allNewDice())
	const [tenzies, setTenzies] = useState(false)
    
    useEffect(() => {
		let allHeld = dice.every(die => die.isHeld);
		let firstValue = dice[0].value;
		let allSameValue = dice.every(die => die.value === firstValue)
		if (allHeld && allSameValue) {
			setTenzies(true);
		}
		
	}, [dice])

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
		return arr;
	}

	const rollDice = () => {
		if (!tenzies) {
			setDice(oldDice => oldDice.map(die => die.isHeld ? die : generateNewDie()))
		} else {
			setTenzies(false);
			setDice(allNewDice())
		}
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
			{tenzies && <Confetti />}
			<div className="tenzies-main-container">
				<h1 className="tenzie-title">Tenzies</h1>
				<div className="tenzie-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
				<div className="die-container">
					{diceElements}
				</div>
				<button className="dice-btn" style={{ width: tenzies? "200px":"125px" }} onClick={rollDice}>
					{tenzies? "New Game":"Roll"}
				</button>
			</div>
		</main>

	)
}


export default TenziesMain;