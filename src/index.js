import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Footer from './components/Footer'
import NavBar from './components/NavBar';

ReactDOM.render(<NavBar />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
