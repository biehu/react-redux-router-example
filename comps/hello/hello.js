import React from 'react';
import {addNum} from './helloState';
import {connect} from 'react-redux';

@connect(state => ({
	num: state.helloState.num
}), {
	addNum
})
export default class Hello extends React.Component {
	clickAddNum = () => {
		this.props.addNum(this.props.num + 1);
	}
	
	render() {
		return (
			<div className="red">
				Hello, {this.props.num}<button onClick={this.clickAddNum}>+</button>
			</div>
		);
	}
}
