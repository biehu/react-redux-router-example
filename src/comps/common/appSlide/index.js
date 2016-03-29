import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class AppSlide extends React.Component {
	state = {
		currentSlide: 0
	};
	
	toggleNext() {
		var current = this.state.currentSlide;
		var next = current + 1;
		
		if (next > this.props.data.length - 1) {
			next = 0;
		}
		
		this.setState({currentSlide: next});
	}
	
	togglePrev() {
		var current = this.state.currentSlide;
		var prev = current - 1;
		if (prev < 0) {
			prev = this.props.data.length - 1;
		}
		
		this.setState({currentSlide: prev});
	}
	
	render() {
		var slideNodes = this.props.data.map(function (slideNode, index) {
			var slideNodeClassName = this.state.currentSlide === index ? 'slide-active' : 'slide'; 
			return (
				<div key={index} styleName={slideNodeClassName}>
					<img src={slideNode.imagePath}  />
				</div>
			);
		}.bind(this));
		
		return (
			<div styleName="slideWrap">
				<div styleName="slides">{slideNodes}</div>
				<div styleName="controls">
			        <div styleName="toggle toggle-prev" onClick={this.togglePrev.bind(this)}>Prev</div>
			        <div styleName="toggle toggle-next" onClick={this.toggleNext.bind(this)}>Next</div>
			    </div>
			</div>
		);
	}
};
