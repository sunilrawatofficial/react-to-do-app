import { Component } from "react";

export default class Form extends Component {
	render() {
		return (
			<div>
				<h5>User Information</h5>
				<form onSubmit={this.submitForm}>
					<input placeholder="First Name" type="text" value = {this.state.firstName} onChange={this.changeFirstName} ></input>
					<input placeholder="Last Name" type="text" value = {this.state.lastName} onChange={this.changeLastName} ></input>

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}

	state = {
		firstName: "",
		lastName: ""
	}

	changeFirstName = (event) => {
		this.setState({ firstName:event.target.value })
	}

	changeLastName = (event) => {
		this.setState({ lastName:event.target.value })
	}

	submitForm = (event) => {
		event.preventDefault();
	}
}