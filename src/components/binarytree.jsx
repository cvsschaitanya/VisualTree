import React, { Component } from "react";
import Node from "./node";
import Line from "./line";
import BinarySearchTree from "./BinarySearchTree";


class BinaryTreeComponent extends Component {
	constructor() {
		super();
		let bst = new BinarySearchTree();
		// bst.initSample();
		console.log(bst.inorder());

		this.state = { bst: bst, initH: 50 * bst.getHeight() };
		this.newval = -1;
	}
	render() {
		// console.log("Render for Tree");
		return (
			<React.Fragment>
				<h1>Tree</h1>
				<input
					type="number"
					onChange={(event) => {
						this.newval = Number(event.target.value);
					}}
				/>
				<button
					className="btn btn-primary m-2"
					onClick={this.addNewVal}
				>
					Add
				</button>
				<div style={{ position: "relative" }}>
					{this.state.bst.inorder().map((treenode) => {
						return (
							<React.Fragment>
								<Line
									key={"_" + treenode.keystr}
									node={treenode}
									initH={this.state.initH}
								/>
								<Node
									key={treenode.keystr}
									node={treenode}
									initH={this.state.initH}
								/>
							</React.Fragment>
						);
					})}
				</div>
			</React.Fragment>
		);
	}

	addNewVal = () => {
		let newbst = this.state.bst.clone();
		newbst.insert(this.newval);
		console.log(newbst);
		this.setState({ bst: newbst, initH: 50 * newbst.getHeight() });
		let inputbox = document.querySelector("input");
		inputbox.value = "";
		inputbox.style.fontSize = newbst.width * 4;
		inputbox.style.height = newbst.width * 20;
		inputbox.style.width = newbst.width * 100;
	};
}

export default BinaryTreeComponent;

