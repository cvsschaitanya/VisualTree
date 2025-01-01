import React from "react";

const Node = (props) => {
	

	const styles = {
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
		top: (props.initH * (1 - Math.pow(props.r, props.node.row))) / (1 - props.r),
		left: props.node.hpos * 80,
	};



	return (
		<div style={styles} className="tile bg-primary rounded-circle">
			{props.node.value}
		</div>
	);
};

export default Node;
