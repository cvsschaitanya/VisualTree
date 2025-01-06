import React from "react";
import ReactDOM from "react-dom/client"; // Updated import statement
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import BinaryTreeComponent from "./components/binarytree.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BinaryTreeComponent />
    </React.StrictMode>
);