import React from 'react';
import {validator} from '../../../utils/validator';

export default class AppForm extends React.Component {
	inputs = {};
	model = {};
	
	state = {
		isValid: true
	};
	
	validate(component) {
		if (!component.props.validations) {
			return;
		}
		
		var isValid = true;
		var error = '';
		
		if (component.props.validations) {
			component.props.validations.split(',').forEach(function (validation, i) {
				var args = validation.split(':');
				var validateMethod = args.shift();
				
				args = args.map(function (arg) {
					return JSON.parse(arg);
				});
				
				args = [component.state.value].concat(args);
				
				if (!validator[validateMethod].apply(validator, args)) {
					isValid = false;
					
					if (component.props.validationErrors && 
						component.props.validationErrors.split(',')[i]) {
						error = component.props.validationErrors.split(',')[i];		
					}

				}
			});
		}
		
		component.setState({
			isValid,
			error
		}, this.validateForm.bind(this));
	}
	
	attachToForm(component) {
		this.inputs[component.props.name] = component;
		this.model[component.props.name] = component.state.value;
	}
	
	detachFromForm(component) {
		delete this.inputs[component.props.name];
		delete this.model[component.props.name];
	}
	
	static childContextTypes = {
		attachToForm: React.PropTypes.func.isRequired,
		detachFromForm: React.PropTypes.func.isRequired,
		validate: React.PropTypes.func.isRequired
	};
	
	getChildContext() {
		return {
			attachToForm: this.attachToForm.bind(this),
			detachFromForm: this.detachFromForm.bind(this),
			validate: this.validate.bind(this)
		}
	}
	
	updateModel(component) {
		Object.keys(this.inputs).forEach(function (name) {
			this.model[name] = this.inputs[name].state.value;
		}.bind(this));
	}
	
	submit(event) {
		event.preventDefault();
		
		Object.keys(this.inputs).forEach(function (name) {
			this.validate(this.inputs[name]);
		}.bind(this));
		
		if (this.state.isValid) {
			this.updateModel();
			this.props.submit(this.model);
		}
	} 
	
	validateForm() {
		var allIsValid = true;
		var inputs = this.inputs;
		
		if (!inputs) return;
		
		Object.keys(inputs).forEach(function (name) {
			if (!inputs[name].state.isValid) {
				allIsValid = false;
			}
		});
		
	 	this.setState({
			isValid: allIsValid
		});
	}
	
	componentDidMount() {
		this.validateForm();
	}
	
	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				{this.props.children}
				<button type="submit">提交</button>
			</form>
		);
	}
};
