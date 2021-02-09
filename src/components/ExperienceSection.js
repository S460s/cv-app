import React from 'react';

function SavedText(props) {
	const { companyName, position, from, to, tasks, handleEdit } = props;
	return (
		<div className='section'>
			<h2>Expirience Section</h2>
			<p>Company Name: {companyName}</p>
			<p>Position: {position}</p>
			<p>From: {from}</p>
			<p>To: {to}</p>
			<p>Main task/s: {tasks}</p>
			<button onClick={handleEdit}>Edit</button>
		</div>
	);
}

class ExpirienceSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
			companyName: '',
			position: '',
			from: '',
			to: '',
			tasks: '',
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
		this.setState((prevState) => {
			return { editMode: !prevState.editMode };
		});
	}

	render() {
		const { editMode, companyName, position, from, to, tasks } = this.state;

		if (!editMode) {
			return (
				<SavedText
					companyName={companyName}
					position={position}
					from={from}
					to={to}
					tasks={tasks}
					handleEdit={this.handleSubmit}
				/>
			);
		}

		return (
			<section className='section'>
				<h2>Expirience Section</h2>
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Company Name'
						name='companyName'
						onChange={this.handleChange}
						value={companyName}
					/>
					<input
						type='text'
						placeholder='Position Title'
						name='position'
						onChange={this.handleChange}
						value={position}
					/>
					<input
						type='date'
						name='from'
						placeholder='From'
						onChange={this.handleChange}
						value={from}
					/>
					<input
						type='date'
						name='to'
						placeholder='To'
						onChange={this.handleChange}
						value={to}
					/>
					<textarea
						name='tasks'
						id=''
						cols='30'
						rows='10'
						placeholder='Main Tasks'
						onChange={this.handleChange}
						value={tasks}
					/>

					<button>Save</button>
				</form>
			</section>
		);
	}
}

export default ExpirienceSection;
