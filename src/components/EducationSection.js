import React from 'react';
import './../styles/EducationSection.css';
function SavedText(props) {
	const { schoolName, study, from, to, handleEdit } = props;
	return (
		<div className='section'>
			<p>School Name: {schoolName}</p>
			<p>Study: {study}</p>
			<p>From: {from}</p>
			<p>To: {to}</p>
			<button onClick={handleEdit}>Edit</button>
		</div>
	);
}

class EducationSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
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
		this.setState((prevState) => {
			return { editMode: !prevState.editMode };
		});
	}

	render() {
		const { editMode, schoolName, study, from, to } = this.state;
		const { id, handleDelete } = this.props;
		if (!editMode) {
			return (
				<SavedText
					schoolName={schoolName}
					study={study}
					from={from}
					to={to}
					handleEdit={this.handleSubmit}
				/>
			);
		}

		return (
			<section>
				<form className='section' action='' onSubmit={this.handleSubmit}>
					<label htmlFor='schoolName'>
						School Name
						<input
							type='text'
							placeholder='School Name'
							name='schoolName'
							id='schoolName'
							onChange={this.handleChange}
							value={schoolName}
							required
						/>
					</label>
					<label htmlFor=''>
						Title of Study
						<input
							type='text'
							placeholder='Title of study'
							name='study'
							onChange={this.handleChange}
							value={study}
							required
						/>
					</label>
					<label htmlFor=''>
						From
						<input
							type='date'
							name='from'
							placeholder='From'
							onChange={this.handleChange}
							value={from}
							required
						/>
					</label>

					<label htmlFor=''>
						To
						<input
							type='date'
							name='to'
							placeholder='To'
							onChange={this.handleChange}
							value={to}
							required
						/>
					</label>
					<button>Save</button>
					<button
						type='button'
						onClick={() => handleDelete('educationIds', id)}>
						Delete
					</button>
				</form>
			</section>
		);
	}
}

export default EducationSection;
