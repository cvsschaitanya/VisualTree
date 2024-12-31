import React, { useMemo } from "react";

const Line = ({ node, initH }) => {
	const styles = useMemo(() => {
		let R = 35;
		let r = 0.9;
		if (node.parent === null) {
			return {};
		}
		let x1 = node.hpos * 80;
		let y1 = (initH * (1 - Math.pow(r, node.row))) / (1 - r);
		let x2 = node.parent.hpos * 80;
		let y2 = (initH * (1 - Math.pow(r, node.parent.row))) / (1 - r);

		let angle = Math.atan((y2 - y1) / (x2 - x1));

		x1 += R * (1 - Math.cos(angle));
		y1 += R * (1 - Math.sin(angle));
		x2 += R * (1 + Math.cos(angle));
		y2 += R * (1 + Math.sin(angle));

		return {
			width: Math.abs(x2 - x1),
			height: 0,
			borderTop: "2px solid black",
			position: "absolute",
			left: Math.min(x2, x1),
			top: (y2 + y1) / 2,
			transform: `skewY(${(angle * 180) / Math.PI}deg)`,
		};
	}, [node, initH]);

	if (node.parent) return <div style={styles}></div>;
	else return <React.Fragment />;
};

export default Line;
