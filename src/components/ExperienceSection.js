import React from 'react';

class ExpirienceSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			position: '',
			from: '',
			to: '',
			tasks: '',
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
				<h2>Expirience Section</h2>
				<input
					type='text'
					placeholder='Company Name'
					name='companyName'
					onChange={this.handleChange}
					value={this.state.companyName}
				/>
				<input
					type='text'
					placeholder='Position Title'
					name='position'
					onChange={this.handleChange}
					value={this.state.position}
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
				<textarea
					name='tasks'
					id=''
					cols='30'
					rows='10'
					placeholder='Main Tasks'
					onChange={this.handleChange}
					value={this.state.tasks}
				/>
			</div>
		);
	}
}

export default ExpirienceSection;
