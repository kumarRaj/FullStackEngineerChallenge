import React from 'react';
import './Employees.css';

export default class Actions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [{name: 'Train'}, {name: 'Herma'}],
			currentEmployee: '',
		};
	}

	renderEmployeeList = () => {
		return this.state.employees.map(el => (
			<div className='sidebar-name' onClick={() => this.setState({currentEmployee: el.name})}>{el.name}</div>
		));
	}

	renderForm = () => (
		this.state.currentEmployee && 
		(<div>
			<div>{this.state.currentEmployee}</div>
			<div className="form-field">
				<p className="form-label">Review: </p>
				<input className="form-control" type="text"/>
			</div>
			<div className="form-field">
				<p className="form-label">Rating: </p>
				<input className="form-control" type="text"/>
			</div>

			<button>Submit</button>
		</div>)

	);

	render() {
		return (
			<div className='actions'>
				<div className='sidebar'>
					To review:
					
					{this.renderEmployeeList()}
				</div>

				<div className='layout'>
					{this.renderForm()}
				</div>
			</div>
		);
	}
}