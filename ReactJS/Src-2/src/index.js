import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShoppingApp from './ShoppingApp';
import Calc from './Calc';
import RestClient from './RestClient';

//This is the start point of the Application. 
// const root = ReactDOM.createRoot(document.getElementById('mainRoot'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

///////////////2nd Day Component/////////////////////
// const root = ReactDOM.createRoot(document.getElementById('mainRoot'));
// root.render(
//     <React.StrictMode>
//       <App/>
//       <ShoppingApp/>
//     </React.StrictMode>
//   );

/////////////////////Rest Client Environment//////////////
ReactDOM.render(<RestClient/>, document.getElementById("mainRoot"))
//React.StrictMode is a tool of React to highlight possible problems in the App when it executes. 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
