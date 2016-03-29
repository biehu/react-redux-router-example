import React from 'react';
import AppForm from '../common/appForm';
import AppInput from '../common/appForm/appInput';

export default class MyAppForm extends React.Component {
	changeUrl() {
		location.href = '/success';
	}
	
	handleSubmit(params) {
		console.log(params);
	}
	
	render() {
		return (
			<AppForm submit={this.handleSubmit}>
				<div className="form-group">
					<label>Email</label>
					<AppInput 
						name="email" 
						validations="isEmail" 
						validationErrors="this is not a valid email"
					/>
				</div>
				<div className="form-group">
					<label>QQ</label>
					<AppInput 
						name="qq" 
						validations="isNumber" 
						validationErrors="this is not a valid qq"
					/>
				</div>
			</AppForm>
		);
	}
};
