import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetData from './GetData';
import App from './App';
import { getActiveTab } from './getPageData';
import ToolBar from './ToolBar';
import NewsLegit from './NewsLegit';
import reportWebVitals from './reportWebVitals';

//worked here.
//console.log(getActiveTab());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const menu = ReactDOM.createRoot(document.getElementById('header'));
menu.render(
  <React.StrictMode>
    <ToolBar />
  </React.StrictMode>
);

const stats = ReactDOM.createRoot(document.getElementById('stats'));
stats.render(
  <React.StrictMode>
    <NewsLegit />
  </React.StrictMode>
);

const url = ReactDOM.createRoot(document.getElementById('url'));
url.render(
  <React.StrictMode>
    <GetData />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
