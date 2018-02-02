import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js';
import "typeface-roboto";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
