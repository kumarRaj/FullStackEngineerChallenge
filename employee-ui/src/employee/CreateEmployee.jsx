import React from 'react';
import './Employees.css';

export default class CreateEmployee extends React.Component {
	render() {
		return (
			<div className="employee__create"> 
				<div className="form-field">
				<p className="form-label">Name: </p>
				<input className="form-control" type="text"/>
				</div>
				<div className="form-field">
				<p className="form-label">Department: </p>
				<input className="form-control" type="text"/>
				</div>
				<div className="form-field">
				<p className="form-label">Birthday: </p> 
				<input className="form-control" type="text"/>
				</div>

				<button>Submit</button>
			</div>
		);
	}
}