import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter >
<App />

</BrowserRouter >

, document.getElementById('root'));
registerServiceWorker();
