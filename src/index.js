import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state.js';
import { addPostUI, subscribe, updateNewPostText } from './Redux/state.js';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireDOM = () =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPostUI={addPostUI} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );

}

rerenderEntireDOM()
subscribe(rerenderEntireDOM)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
