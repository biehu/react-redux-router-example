import React from 'react';

export default class AppInput extends React.Component {
	state = {
		value: this.props.value || ''
	};
	
	static contextTypes = {
		attachToForm: React.PropTypes.func.isRequired,
		detachFromForm: React.PropTypes.func.isRequired,
		validate: React.PropTypes.func.isRequired
	};
	
	componentWillMount() {
		this.context.attachToForm(this);
	}
	
	componentWillUnmount() {
		this.context.detachFromForm(this);
	}
	
	setValue(event) {
		this.setState({
			value: event.currentTarget.value
		});
	}
	
	render() {
		var markAsValid = this.state.isValid;
		
		var className = '';
		if (!markAsValid) className = 'error';
		
		return (
			<div className={className}>
				<input 
					type="text" 
					name={this.props.name} 
					onChange={this.setValue.bind(this)}
					value={this.state.value}
				/>
				<span>{markAsValid ? null : this.state.error}</span>
			</div>
		);
	}
};
