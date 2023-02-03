import React from 'react';
import ReactDOM from 'react-dom/client';
import './../index.css';
import App from './../App';
import reportWebVitals from './../reportWebVitals';
import { addPostUI, updateNewPostText } from './state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireDOM = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPostUI={addPostUI} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
