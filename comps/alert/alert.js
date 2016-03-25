import React from 'react';
import AppAlert from '../common/appAlert';

export default class Alert extends React.Component {
	state = {
		alert: false
	};
	
	handleAlert = () => {
		this.setState({alert: true});
	}
	
	render() {
		var options = {
			title:  'alert title',
			message: 'this is an alert',
			alert: this.state.alert,
			confirmButton: {
				text: '保存',
				action: function () {
					console.log('干点啥！');
				}
			}
		};
		return (
			<div>
				<button onClick={this.handleAlert}>弹窗</button>
				<AppAlert options={options} />
			</div>
		);
	}
};
