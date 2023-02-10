import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireDOM = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>

  );

}

rerenderEntireDOM(store.getState())  // Первая отрисовка страницы

store.subscribe( () => rerenderEntireDOM( store.getState() ) ) // Ререндер после изменения state(набирание текста, доюавление поста)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
