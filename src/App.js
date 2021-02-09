import React from 'react';
import uniqid from 'uniqid';
import EducationSection from './components/EducationSection';
import ExpirienceSection from './components/ExperienceSection';
import GeneralSection from './components/GeneralSection';
import './styles/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eduSections: [],
			expSections: [],
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(type) {
		if (type === 'xp') {
			this.setState((prevState) => {
				return {
					expSections: [
						...prevState.expSections,
						<ExpirienceSection key={uniqid()} />,
					],
				};
			});
		} else {
			this.setState((prevState) => {
				return {
					eduSections: [
						...prevState.eduSections,
						<EducationSection key={uniqid()} />,
					],
				};
			});
		}
	}

	render() {
		return (
			<div>
				<header>
					<h1 className='title'>CV-App</h1>
				</header>
				<GeneralSection />
				<div>
					<h2>Educational Experience</h2>
					{this.state.eduSections}
					<button onClick={() => this.handleClick('edu')}>Add</button>
				</div>
				<div>
					<h2>Experience Section</h2>
					{this.state.expSections}
					<button onClick={() => this.handleClick('xp')}>Add</button>
				</div>
			</div>
		);
	}
}

export default App;
