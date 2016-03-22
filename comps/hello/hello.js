import React, {PropTypes} from 'react';
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
			<div>
				<div className="red">Hello jy, {this.props.num}</div>
				<button onClick={this.clickAddNum}>+</button>
			</div>
		);
	}
}
