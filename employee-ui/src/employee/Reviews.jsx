import React from 'react';

export default class Reviews extends React.Component {

	goToEdit(employeeId, reviewId) {
		this.props.history.push('/employee/' + employeeId + '/review/' + reviewId);
	}

	render() {
		return this.props.reviews.map(review => {
			return (
				<div className="review">
					<p className="reviewer__name">{review.name}</p> 
					<p className="review__text">{review.text}</p>
					<p className="review__rating">{review.rating}</p>

					<button onClick={() => this.goToEdit(this.props.employeeId, review.id)} className="employee-btn btn-edit">Edit</button>
				</div>
			)	
		});
	}
}