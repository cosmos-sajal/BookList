import React, { Component } from 'react';
import Redux from 'react-redux';
import { connect } from 'react-redux';

class ActiveBook extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>{this.props.activeBook.title}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeBook: state.activeBook
	};
}

export default connect(mapStateToProps)(ActiveBook);
