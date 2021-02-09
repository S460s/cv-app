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
			educationIds: [],
			experienceIds: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick(type) {
		this.setState((prevState) => {
			return {
				[type]: [...prevState[type], uniqid()],
			};
		});
	}

	handleDelete(type, id) {
		this.setState((prevState) => {
			let newList = prevState[type].filter((key) => key !== id);
			return {
				[type]: newList,
			};
		});
	}

	render() {
		const eduComponents = this.state.educationIds.map((id) => (
			<EducationSection key={id} id={id} handleDelete={this.handleDelete} />
		));
		const expComponents = this.state.experienceIds.map((id) => (
			<ExpirienceSection key={id} id={id} handleDelete={this.handleDelete} />
		));

		return (
			<div>
				<header>
					<h1 className='title'>CV-App with React</h1>
				</header>
				<main>
					<GeneralSection />
					<div>
						<h2>Educational Experience</h2>
						{eduComponents}
						<button onClick={() => this.handleClick('educationIds')}>
							Add
						</button>
					</div>
					<div>
						<h2>Experience Section</h2>
						{expComponents}
						<button onClick={() => this.handleClick('experienceIds')}>
							Add
						</button>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
