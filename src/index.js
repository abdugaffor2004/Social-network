import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireDOM = () =>{
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPostUI={store.addPostUI.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
    </React.StrictMode>
  );

}

rerenderEntireDOM()
store.subscribe(rerenderEntireDOM)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
