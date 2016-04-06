import React from 'react';
import Service from './service';

export default class SearchChooser extends React.Component {
	state = {
		total: 0
	};
	
	addTotal(price) {
		
		this.setState({total: this.state.total + price});
	}
	
	render() {
		var services = this.props.items.map(function (s, index) {
			return <Service name={s.name}
				key={index}
				price={s.price}
				active={s.active}
				addTotal={this.addTotal.bind(this)} />;
		}.bind(this));
		
		return (
			<div>
				<h1>Our services</h1>
				<div id="services">
					{services}
					<p id="total">Total <b>{this.state.total.toFixed(2)}</b></p>
				</div>
			</div>
		);
	}	
}
