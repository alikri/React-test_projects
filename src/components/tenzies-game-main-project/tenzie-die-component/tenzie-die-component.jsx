import "./tenzie-die.styles.scss";

const Die = (props) => {
	const styles =  {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
	return (
		<div
			className="die-box"
			style={styles}
			onClick={props.holdDice}>
				{props.value}
		</div>
	)
}

export default Die;