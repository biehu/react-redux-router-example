import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../statics/css/app.css';

@connect(state => ({
    loading: state.routerState.fetching // 等待浮层
}))
export default class Container extends React.Component {
	static propTypes = {
        loading: PropTypes.bool,
        children: PropTypes.node
    }
	
	render() {
		const {children, loading} = this.props;
		const LinkMargin = {
			marginRight: '20px'
		};
		return (
			<div>
				<p>
					<Link to="hello" style={LinkMargin}>Hello</Link> 
					<Link to="alert" style={LinkMargin}>Alert</Link> 
					<Link to="form" style={LinkMargin}>Form</Link>
					<Link to="slide">Slide</Link>
				</p>
				{loading ? '加载中...' : children}
			</div>
		);
	}
}
