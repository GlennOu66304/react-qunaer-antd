import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 4.change and clean clean the file:3)clean the file
// import reportWebVitals from './reportWebVitals';

// 1.start the project:create-react-app react-travel --typescript
// 2.install the package:css
// 3.change the configuration file: code base:resource section
// 1)custom.d.ts replace
// 2)vs code (command shift .)
// 3)ts.config.json
// import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
