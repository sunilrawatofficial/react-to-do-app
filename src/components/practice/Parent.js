import { Component } from "react";

class Parent extends Component {
	name = "Tony Stark ";

	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	displayNameViaFunction(nameOfFather) {
		return `Here parent component is ${nameOfFather}`;
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	decrement() {
		this.state.counter > 0 
		? this.setState({ counter: this.state.counter - 1 }) 
		: alert("Cannot be negative");
	}

	testClick() {
		console.log("Peter Parker", this);
	}

	render() {
		return this.state.counter >=7
		 ?(<h1>highest counter {this.state.counter} reached</h1>)
		:(<div>
				<h1>{this.displayNameViaFunction(this.props.nameOfFather)}</h1>
				<h2>Parent Counter: {this.state.counter}</h2>
				<button onClick={this.testClick}>Test</button>

				<button onClick={() => this.increment()}>Parent Counter +</button>
				<button onClick={() => this.decrement()}>Parent Counter -</button>
			</div>
		);
	}
}

export default Parent;
