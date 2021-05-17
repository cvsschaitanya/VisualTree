import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import BinaryTreeComponent from "./components/binarytree";

ReactDOM.render(
	<React.StrictMode>
		<BinaryTreeComponent />
	</React.StrictMode>,
	document.getElementById("root")
);
