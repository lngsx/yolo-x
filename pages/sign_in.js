import { Component } from 'react';
import Router from 'next/router';

import s from '../next_config/style';
import { composeAuthInfoHeaderFromLocalStorage, ifAuthPass, getAuthInfoFromHeader, saveAuthInfoToLocalStorage } from '../utils';

class SignInPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'ntpat.ch@gmail.com',
			password: 'kkkkkkkk'
		};

		this.submit = () => {
			const headers = {
				email: this.state.email,
				password: this.state.password
			};

			fetch('http://localhost:3000/admin_auth/sign_in', { method: 'POST', headers })
				.then(response => {
					 if (ifAuthPass(response)) {
					 	const authInfo = getAuthInfoFromHeader(response);
					 	saveAuthInfoToLocalStorage(authInfo, localStorage);
					 	Router.push('/');
					 }
				})
				.catch(ex => {
					console.log('parsing failed', ex);
				});
		};
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="sans-serif black-60">
				<section className="pa4 bg-white br2 mw6 center v-mid mt5 shadow-4">
					<form className="measure center">
						<fieldset className="ba b--transparent ph0 mh0">
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input
									onChange={event => this.setState({ email: event.target.value })}
									value={this.state.email}
									className="pa2 mt2 input-reset ba b--light-silver bg-transparent w-100 br2 "
									type="email"
									name="email-address"
									/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								<input
									onChange={event => this.setState({ password: event.target.value })}
									value={this.state.password}
									className="b pa2 mt2 input-reset ba b--light-silver bg-transparent w-100 br2 "
									type="password"
									name="password"
									/>
							</div>
						</fieldset>
						<div className="">

							<a
								onClick={this.submit}
								className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue"
								href="#0"
								>Sign In</a>
						</div>

					</form>

				</section>
				<style jsx global>{ `${s}body {background-color: #f3f7f9}` }</style>
			</div>
		);
	}
}

export default SignInPage;
