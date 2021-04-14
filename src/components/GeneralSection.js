import React, { useState } from 'react';
import { NoPrint, Print } from 'react-easy-print';
import Input from './Input';
import TextSection from './TextSection';

const GeneralSection = () => {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});
	const [editMode, setEditMode] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPersonalInfo((prevInfo) => {
			let newInfo = { ...prevInfo, [name]: value };
			return newInfo;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEditMode((prevMode) => !prevMode);
	};

	const { firstName, lastName, email, phone } = personalInfo;

	if (!editMode) {
		return (
			<TextSection
				firstName={firstName}
				lastName={lastName}
				email={email}
				phone={phone}
				handleEdit={handleSubmit}
			/>
		);
	}

	return (
		<NoPrint>
			<Print printOnly>
				<p className='warning'>Fill in the form.</p>
			</Print>
			<section className='generalSection'>
				<form className='section' action='' onSubmit={handleSubmit}>

					<Input paragraphText="First Name:" type="text" placeholder='First Name' name='firstName' onChange={handleChange} value={firstName}/>

					<Input paragraphText="Last Name:" type="text" placeholder='Last Name' name='lastName' onChange={handleChange} value={lastName}/>

					<Input paragraphText="Email:" type="email" placeholder='example@gmail.com' name='email' onChange={handleChange} value={email}/>

					<Input paragraphText="Phone Number:" type="tel" placeholder='123-456-7890' name='phone' onChange={handleChange} value={phone}/>

					<button className='formBtn generalBtn' type='submit'>
						Save
					</button>
				</form>
			</section>
		</NoPrint>
	);
};

export default GeneralSection;
