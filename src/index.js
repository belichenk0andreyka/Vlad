import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";

import './index.css';

const HelloWorld = () => {
    return (
        <App />
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));