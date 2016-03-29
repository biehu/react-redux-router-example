import React from 'react';

export default class AppAlert extends React.Component {
	static propTypes = {
		options: React.PropTypes.object.isRequired
	};
	
	state = {
		alert: false
	};
	
	handleClose = () => {
		this.setState({alert: false});
	}
	
	componentWillReceiveProps = (nextProps) => {
		this.setState({
			alert: nextProps.options.alert
		});
	}
	
	handleConfirm = () => {
		this.props.options.confirmButton.action();
		this.handleClose();
	}
	
	render = () => {
		var alert = null;
		var options = this.props.options;
		var buttons;
		
		if (options.confirmButton) {  
			buttons = (
				<div>
					<div className="btn-confirm" onClick={this.handleConfirm}>
						{options.confirmButton.text || '确认'}
					</div>
					<div className="btn-cancel" onClick={this.handleClose}>取消</div>
				</div>
			);
		} else { 
			buttons = (
				<div className="btn-default" onClick={this.handleClose}>关闭</div>
			);
		}
		
		
		if (this.state.alert) {
			alert = (
				<div className="alert">
					<div className="alert-header">
						{options.title}
						<div className="alert-close" onClick={this.handleClose}></div>
					</div>
					<div className="alert-main">
						{options.message}
					</div>
					<div className="alert-footer">
						{buttons}
					</div>
					
				</div>
			);
		}
		
		return  (
			<div className="alert">
				{alert}
			</div>
		);
	}
};
