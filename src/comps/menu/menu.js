import React from 'react';

export default class Menu extends React.Component {
	state = {
		focused: 0
	};
	
	clicked(index) {
		this.setState({focused: index});
	}
	
	render() {
		return (
			<div>
				<ul>
					{this.props.items.map(function (m, index) {
						var style = {
							color: this.state.focused === index ? 'red' : 'black'
						};
						return (
							<li 
								key={index}
								style={style}
								onClick={this.clicked.bind(this, index)}>
								
								{m}
							</li>
						);
					}.bind(this))}	
				</ul>
			</div>
		);
	}
}
