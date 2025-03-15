import React from "react";
import ReactDOM from "react-dom/client"; // Updated import statement
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import BinaryTreeComponent from "./components/binarytree.jsx";
import Home from "./Home.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Home/>
    </React.StrictMode>
);