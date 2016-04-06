import React from 'react';
import SearchChooser from './searchChooser';

export default class ServiceWrap extends React.Component {
	render() {
		var services = [
		    { name: 'Web Development', price: 300 },
		    { name: 'Design', price: 400 },
		    { name: 'Integration', price: 250 },
		    { name: 'Training', price: 220 }
		];
		return (
			<div>
				<SearchChooser items={services} />
			</div>
		);
	}
}
