import React, { Component } from "react";
import Node from "./node";
import Line from "./line";

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

function BinarySearchTree() {
	this.tree = null;

	function insert(tree, key) {
		if (key < tree.value) {
			if (tree.left) {
				insert(tree.left, key);
			} else {
				tree.left = {
					value: key,
					left: null,
					right: null,
					parent: tree,
				};
			}
		} else {
			if (tree.right) {
				insert(tree.right, key);
			} else {
				tree.right = {
					value: key,
					left: null,
					right: null,
					parent: tree,
				};
			}
		}
	}
	this.insert = (key) => {
		if (this.tree === null) {
			this.tree = {
				value: key,
				left: null,
				right: null,
				parent: null,
			};
		} else {
			insert(this.tree, key);
		}
		this.eval();
	};

	function inorder(tree) {
		return tree === null
			? []
			: inorder(tree.left).concat([tree]).concat(inorder(tree.right));
	}
	this.inorder = () => {
		return inorder(this.tree);
	};

	function getHeight(tree) {
		if (tree === null) return -1;
		else {
			return 1 + Math.max(getHeight(tree.left), getHeight(tree.right));
		}
	}
	this.getHeight = () => {
		return getHeight(this.tree);
	};

	function clone(tree) {
		if (tree === null) {
			return null;
		} else {
			let copy = { ...tree };
			copy.left = clone(tree.left);
			if (copy.left) copy.left.parent = copy;

			copy.right = clone(tree.right);
			if (copy.right) copy.right.parent = copy;
			return copy;
		}
	}
	this.clone = () => {
		let bst = new BinarySearchTree();
		bst.tree = clone(this.tree);
		return bst;
	};

	function evalTree(bigtree, row, col, low, high, keystr) {
		if (bigtree === null) return;

		bigtree.row = row;
		bigtree.col = col;
		bigtree.hpos = (low + high) / 2;
		bigtree.keystr = keystr;
		evalTree(
			bigtree.left,
			row + 1,
			(col - 1) * 2 + 1,
			low,
			bigtree.hpos - 1,
			keystr + "L"
		);
		evalTree(
			bigtree.right,
			row + 1,
			(col - 1) * 2 + 2,
			bigtree.hpos + 1,
			high,
			keystr + "R"
		);
	}

	this.eval = () => {
		this.width = Math.pow(2, this.getHeight() + 1) - 1;
		evalTree(this.tree, 1, 1, 1, this.width, "T");
	};

	this.initSample = () => {
		this.insert(4);
		this.insert(3);
		this.insert(7);
		this.insert(3);
		this.insert(7);
		this.insert(1);
		this.insert(8);
		this.insert(5);
	};
}
