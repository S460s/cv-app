import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import Input from './Input';
import TextSection from './TextSection.js';

const ExpirienceSection = (props) => {
	const [experienxeInfo, setExperienceInfo] = useState({
		companyName: '',
		position: '',
		from: '',
		to: '',
		tasks: '',
	});
	const [editMode, setEditMode] = useState(true);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setExperienceInfo((prevInfo) => {
			return { ...prevInfo, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEditMode((prevMode) => !prevMode);
	};

	const { companyName, position, from, to, tasks } = experienxeInfo;
	const { id, handleDelete } = props;

	if (!editMode) {
		return (
			<TextSection
				companyName={companyName}
				position={position}
				from={from}
				to={to}
				tasks={tasks}
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
				<form action='' className='section xpSection' onSubmit={handleSubmit}>

					<Input paragraphText="Company Name:" type="text" placeholder='Company Name' name='companyName' onChange={handleChange} value={companyName}/>

					<Input paragraphText="Position Title:" type='text' placeholder='Position Title' name='position' onChange={handleChange} value={position}/>

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
					
					<textarea
						name='tasks'
						className='tasks'
						placeholder='Main Tasks'
						onChange={handleChange}
						value={tasks}
						required
					/>
					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('experienceIds', id)}>
						Delete
					</button>
				</form>
			</section>
		</NoPrint>
	);
};

export default ExpirienceSection;
