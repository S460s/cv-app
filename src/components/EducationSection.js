import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import Input from './Input';
import TextSection from './TextSection';

const EducationSection = (props) => {
	const [educationInfo, setEducationInfo] = useState({
		schoolName: '',
		study: '',
		from: '',
		to: '',
	});
	const [editMode, setEditMode] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEducationInfo((prevInfo) => {
			return { ...prevInfo, [name]: value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setEditMode((prevMode) => !prevMode);
	};

	const { schoolName, study, from, to } = educationInfo;

	const { id, handleDelete } = props;
	if (!editMode) {
		return (
			<TextSection
				schoolName={schoolName}
				study={study}
				from={from}
				to={to}
				handleEdit={handleSubmit}
			/>
		);
	}

	return (
		<NoPrint>
			<Print printOnly>
				<p className='warning'>Fill in the form.</p>
			</Print>
			<section>
				<form className='section' action='' onSubmit={handleSubmit}>
						<Input
							paragraphText="School Name:"
							type='text'
							placeholder='School Name'
							name='schoolName'
							onChange={handleChange}
							value={schoolName}
						/>
						<Input
							paragraphText="Title of Study:"
							type='text'
							placeholder='Title of study'
							name='study'
							onChange={handleChange}
							value={study}
						/>
						<Input
							paragraphText="From:"
							type='date'
							name='from'
							placeholder='From'
							onChange={handleChange}
							value={from}
						/>
						<Input
							paragraphText="To:"
							type='date'
							name='to'
							placeholder='To'
							onChange={handleChange}
							value={to}
						/>
					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('educationIds', id)}>
						Delete
					</button>
				</form>
			</section>
		</NoPrint>
	);
};

export default EducationSection;
