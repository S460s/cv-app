import React from 'react';

function SavedText(props) {
	const { name, email, phone, handleClick } = props;
	return (
		<div>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
			<button onClick={handleClick}>Edit</button>
		</div>
	);
}

class GeneralSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
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
		this.setState((prevState) => {
			return { editMode: !prevState.editMode };
		});
	}

	render() {
		const { editMode, name, email, phone } = this.state;

		if (!editMode) {
			return (
				<SavedText
					name={name}
					email={email}
					phone={phone}
					handleClick={this.handleSubmit}
				/>
			);
		}

		return (
			<section>
				<h2>General Information</h2>
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						onChange={this.handleChange}
						value={name}
					/>
					<input
						type='email'
						placeholder='example@gmail.com'
						name='email'
						onChange={this.handleChange}
						value={email}
					/>
					<input
						type='tel'
						name='phone'
						placeholder='123-456-7890'
						onChange={this.handleChange}
						value={phone}
					/>
					<button type='submit'>Save</button>
				</form>
			</section>
		);
	}
}

export default GeneralSection;
