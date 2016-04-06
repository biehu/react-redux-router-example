import React from 'react';
import Menu from './menu';

export default class MenuWrap extends React.Component {
	render() {
		return (
			<div>
				<Menu items={['Home', 'Services', 'About', 'Contact us']} />
			</div>
		);
	}
}
