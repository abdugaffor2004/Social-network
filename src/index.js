import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import './index.css';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <React.StrictMode>

      <Provider store={store}>
        <App />
      </Provider>

    </React.StrictMode>

  );


// store.subscribe( () => rerenderEntireDOM( store.getState() ) ) // Ререндер после изменения state(набирание текста, доюавление поста)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
