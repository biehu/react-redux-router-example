import React, {PropTypes} from 'react';

export default class Search extends React.Component {
	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				url: PropTypes.string
			})
		)
	};
	
	state = {
		searchString: ''
	};
	
	handleChange(e) {
		this.setState({searchString: e.target.value});
	}
	
	render() {
		var libraries = this.props.items;
		var searchString = this.state.searchString.trim().toLowerCase();
		
		if (searchString.length > 0) {
			libraries = libraries.filter(function (l) {
				return l.name.toLowerCase().match(searchString);
			});
		}
		
		return (
			<div>
				<input type="text"
					value={this.state.searchString}
					onChange={this.handleChange.bind(this)}
					placeholder="Type here" />
				<ul>
					{libraries.map(function (l, index) {
						return (<li key={index}>{l.name}<a href={l.url}></a></li>);
					})}
				</ul>
			</div>
		);
	}
}
