import React, { Component } from "react";

class Node extends Component {
	state = {};
	setStyles() {
		this.styles = {
			height: 70,
			width: 70,
			fontSize: 28,
			color: "white",
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			alignContent: "center",
			flexDirection: "column",
			position: "absolute",
			top:
				(this.props.initH *
					(1 - Math.pow(this.r, this.props.node.row))) /
				(1 - this.r),
			left: this.props.node.hpos * 80,
		};
	}
	r = 0.9;
	render() {
		this.setStyles();
		return (
			<div style={this.styles} className="tile bg-primary rounded-circle">
				{this.props.node.value}
			</div>
		);
	}
}

export default Node;
