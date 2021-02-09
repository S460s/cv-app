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
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div>
				<h2>General Information</h2>
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
			</div>
		);
	}
}

export default GeneralSection;
