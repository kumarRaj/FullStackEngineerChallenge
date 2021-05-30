import React from 'react';
import './Employees.css';
import Reviews from './Reviews';

const reviewData = [{ name: 'John', text: 'Good job', rating: 4 }, 
	{ name: 'Sins', text: 'Can do better', rating: 3.5 }]
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
				<div>
					<select>
						<option value="name1" label="Name"/>
						<option value="name2" label="Name2"/>
						<option value="name3" label="Name3"/>
					</select>
					<button>Assign</button>
				</div>
				<div>
					<Reviews employeeId={this.props.employeeId} reviews={reviewData} />
				</div>
			</div>
		);
	}
}