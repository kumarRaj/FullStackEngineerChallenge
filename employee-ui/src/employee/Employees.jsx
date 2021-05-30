import React from 'react';
import './Employees.css';

const EmployeeData = [
	{
		'id': 1,
		'name': 'John',
		'department': 'NHA',
		'isActive': true,
	},
	{
		'id': 2,
		'name': 'Wick',
		'department': 'Other',
		'isActive': true,
	},
	{
		'id': 3,
		'name': 'Lorem',
		'department': 'Three',
		'isActive': true,
	},
	{
		'id': 4,
		'name': 'Ipsum',
		'department': 'WHO',
		'isActive': true,
	},
]; 

class Employees extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			employees: EmployeeData,
		}
	}

	disableEmployee() {}
	
	goToEdit(id) {
		this.props.history.push('/employee/' + id);
	}

	renderEmployees() {
		return this.state.employees.map(employee => (
			(
				<div className="employee">
					<p className="employee__name">{employee.name}</p> 
					<p className="employee__department">{employee.department}</p>
					<button onClick={this.disableEmployee} className="employee-btn btn-disable">Disable</button>
					<button onClick={() => this.goToEdit(employee.id)} className="employee-btn btn-edit">Edit</button>
				</div>
			)
		));
	}

	render() {
		return (
			<div>
				<h3>Add new employee <button onClick={() => this.props.history.push('/employee/new')}>Add</button></h3>
				Employees: 		
				<div className="employee-parent">
					{this.renderEmployees()}
				</div>
			</div>
		);
	}
}

export default Employees;
