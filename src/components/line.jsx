import React, { Component } from "react";

class Line extends Component {
	state = {};
	setStyles() {
		let R = 35;
		let r = 0.9;
		if (this.props.node.parent === null) {
			return;
		}
		this.x1 = this.props.node.hpos * 80;
		this.y1 =
			(this.props.initH * (1 - Math.pow(r, this.props.node.row))) /
			(1 - r);
		this.x2 = this.props.node.parent.hpos * 80;
		this.y2 =
			(this.props.initH * (1 - Math.pow(r, this.props.node.parent.row))) /
			(1 - r);

		this.angle = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));

		this.x1 += R * (1 + Math.cos(this.angle));
		this.y1 += R * (1 + Math.sin(this.angle));
		this.x2 += R * (1 + Math.cos(this.angle));
		this.y2 += R * (1 + Math.sin(this.angle));

		this.styles = {
			width: Math.abs(this.x2 - this.x1),
			height: 0,
			borderTop: "2px solid black",
			position: "absolute",
			left: Math.min(this.x2, this.x1),
			top: (this.y2 + this.y1) / 2,
			transform: `skewY(${(this.angle * 180) / Math.PI}deg)`,
		};
	}

	render() {
		this.setStyles();
		if (this.props.node.parent) return <div style={this.styles}></div>;
		else return <React.Fragment />;
	}
}

export default Line;
