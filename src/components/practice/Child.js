
import { useState } from "react";

const address = "New Delhi";

const displayNameViaFunction = (data) => {
	return `Child ${data.firstName} ${data.lastName} from ${address}`
}

function Child(props) {
	const [wickets, setWickets] = useState(0);
	const [runs, setRuns] = useState(0);
	const [highScore] = useState(7);


	const wicketsCounter = () => {
		setWickets(wickets + 1)
	}

	const runsCounter = () => {
		setRuns(runs + 1)
	}
	let output;

	if (runs >= highScore) {
		output = <h1>Congratulations! for high score {highScore}</h1>
	}
	else {
		output =
			<div>
				<h1> {displayNameViaFunction(props)} </h1>
				<h3>Wickets: {wickets} | Runs: {runs}</h3>
				<button onClick={wicketsCounter}>Wickets Increment</button>
				<button onClick={runsCounter}>Runs Increment</button>
			</div>
	}

	return (
		<div>
			{output}
		</div>
	)
}

export default Child;