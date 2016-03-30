import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './alert.css';

@CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class AppAlert extends React.Component {
	static propTypes = {
		options: React.PropTypes.object.isRequired
	};
	
	state = {
		alert: false
	};
	
	handleClose() {
		this.setState({alert: false});
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			alert: nextProps.options.alert
		});
	}
	
	handleConfirm() {
		this.props.options.confirmButton.action();
		this.handleClose();
	}
	
	render() {
		var alert = null;
		var options = this.props.options;
		var buttons;
		
		if (options.confirmButton) {  
			buttons = (
				<div>
					<div styleName="btn-confirm" onClick={this.handleConfirm.bind(this)}>
						{options.confirmButton.text || '确认'}
					</div>
					<div styleName="btn-cancel" onClick={this.handleClose.bind(this)}>取消</div>
				</div>
			);
		} else { 
			buttons = (
				<div styleName="btn-default" onClick={this.handleClose.bind(this)}>关闭</div>
			);
		}
		
		
		if (this.state.alert) {
			alert = (
				<div styleName="alert">
					<div styleName="alert-header">
						{options.title}
						<div styleName="alert-close" onClick={this.handleClose.bind(this)}>x</div>
					</div>
					<div styleName="alert-main">
						{options.message}
					</div>
					<div styleName="alert-footer">
						{buttons}
					</div>
					
				</div>
			);
		}
		
		return  (
			<div styleName="alert">
				{alert}
			</div>
		);
	}
};
