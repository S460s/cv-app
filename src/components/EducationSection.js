import React from 'react';

class EducationSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			schoolName: '',
			study: '',
			from: '',
			to: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<section>
				<h2>Educational Section</h2>
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='School Name'
						name='schoolName'
						onChange={this.handleChange}
						value={this.state.schoolName}
					/>
					<input
						type='text'
						placeholder='Title of study'
						name='study'
						onChange={this.handleChange}
						value={this.state.study}
					/>
					<input
						type='date'
						name='from'
						placeholder='From'
						onChange={this.handleChange}
						value={this.state.from}
					/>
					<input
						type='date'
						name='to'
						placeholder='To'
						onChange={this.handleChange}
						value={this.state.to}
					/>
					<button>Save</button>
				</form>
			</section>
		);
	}
}

export default EducationSection;
