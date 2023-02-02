import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state.js'
import { addPostBLL } from './Redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireDOM = () =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPostBLL={addPostBLL} rerender={rerenderEntireDOM}/>
    </React.StrictMode>
  );

}

rerenderEntireDOM()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
