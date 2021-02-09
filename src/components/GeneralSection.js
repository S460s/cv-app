import React from 'react';

class GeneralSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
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
				<h2>General Information</h2>
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						onChange={this.handleChange}
						value={this.state.name}
					/>
					<input
						type='email'
						placeholder='example@gmail.com'
						name='email'
						onChange={this.handleChange}
						value={this.state.email}
					/>
					<input
						type='tel'
						name='phone'
						placeholder='123-456-7890'
						onChange={this.handleChange}
						value={this.state.phone}
					/>
					<button>Save</button>
				</form>
			</section>
		);
	}
}

export default GeneralSection;
