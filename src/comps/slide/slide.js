import React from 'react';
import AppSlide from '../common/appSlide';

export default class Slide extends React.Component {
	// Dataset
	state = {
		data: [
		  {
		    id         : "slide1",
		    imagePath  : "/src/statics/img/car.jpg"
		  },
		  {
		    id         : "slide2",
		    imagePath  : "/src/statics/img/car2.jpg"
		  }
		]
	};
	
	render() {
		return (
			<AppSlide data={this.state.data} />
		);
	}
};
