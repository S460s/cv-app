function TextSection(props) {
	if (props.firstName) {
		return (
			<div className='textSection'>
				<p>First Name: {props.firstName}</p>
				<p>Last Name: {props.lastName}</p>
				<p>Email: {props.email}</p>
				<p>Phone: {props.phone}</p>
				<i className='far fa-edit' onClick={props.handleClick}></i>
			</div>
		);
	} else if (props.companyName) {
		return (
			<div className='textSection'>
				<p>Company Name: {props.companyName}</p>
				<p>Position: {props.position}</p>
				<p>From: {props.from}</p>
				<p>To: {props.to}</p>
				<p>Main task/s: {props.tasks}</p>
				<i className='far fa-edit' onClick={props.handleClick}></i>
			</div>
		);
	} else {
		return (
			<div className='textSection'>
				<p>School Name: {props.schoolName}</p>
				<p>Study: {props.study}</p>
				<p>From: {props.from}</p>
				<p>To: {props.to}</p>
				<i className='far fa-edit' onClick={props.handleClick}></i>
			</div>
		);
	}
}

export default TextSection;
