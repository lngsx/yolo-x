import { Component } from 'react';
// Import Router from 'next/router';
import Link from 'next/link';

import s from '../next_config/style';
import { composeAuthInfoHeaderFromLocalStorage, validateLocalToken, ifAuthPass } from '../utils';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="dt w-100 border-box pa3 ph5-ns bg-white shadow-4">
				<div className="dtc v-mid w-75 tr ">
					{
						this.props.isSignedIn ? (
							<div>
								<img src={this.props.avatar_url} className="dib w2 h2 br-100 v-mid mr3" alt={this.props.name}/>
								<span className="dark-gray f6 f5-ns dib v-mid">{ this.props.name }</span>

								<Link href="/sign_out">
									<a className="link dim dark-gray f7 f5-ns dib v-mid ph1" href="#" title="Contact" style={{ fontSize: '12px' }}> (Sign out)</a>
								</Link>
							</div>
						) : <div className="h2"/>
					}
				</div>
			</nav>
		);
	}
}

export default Nav;
