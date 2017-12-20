import { Component } from 'react';
import Router from 'next/router';

class SignOutPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		localStorage.clear();
		Router.push('/');
	}

	render() {
		return (
			<div className="sans-serif black-70"/>
		);
	}
}

export default SignOutPage;
