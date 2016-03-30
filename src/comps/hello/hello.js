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
				Hello
			<hr />
			<h2>计数器</h2>
				{this.props.num}<button onClick={this.clickAddNum}>+</button>
			</div>
		);
	}
}
