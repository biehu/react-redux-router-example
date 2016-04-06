import React, {PropTypes} from 'react';

export default class Timer extends React.Component {
	static propTypes = {
		start: PropTypes.string
	};
	
	static defaultProps = {
		start: 1
	};
	
	state = {
		elapsed: 0
	};
	
	componentDidMount() {
		this.timer = setInterval(this.tick.bind(this), 50);
	}
	
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	
	tick() {
		this.setState({elapsed: new Date - this.props.start});
	}
	
	render() {
		var elapsed = Math.round(this.state.elapsed / 100);
		var seconds = (elapsed / 10).toFixed(1);
		return <p>this example was started <b>{seconds} seconds</b> ago.</p>;
	}
}
