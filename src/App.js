import React from 'react';
import EducationSection from './components/EducationSection';
import ExpirienceSection from './components/experienceSection';
import GeneralSection from './components/GeneralSection';
import './styles/App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1 className='title'>CV-App</h1>
				</header>
				<GeneralSection />
				<EducationSection />
				<ExpirienceSection />
			</div>
		);
	}
}

export default App;
