import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello React Ninja!'}/>, document.getElementById('root'));
registerServiceWorker();
