import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  {img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  message: 'Hey, why nobody love me ?'},

  {img: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  message: "Hi everyone! It's already my second post!"},

  {img: 'https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  message: "I love chocolate."},
  
  {img: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  message: "I am fun of React! "}
]


let dialogsData = [
  {id: 1 , name:"Dilshod"},
  {id: 2 , name:"Muhammed"},
  {id: 3 , name:"Iskandar"},
  {id: 4 , name:"Zafar"},
  {id: 5 , name:"Shukur"}
]

let messagesData = [
  {id: 1 , message:"How is your react learning?"},
  {id: 2 , message:"Hey, yo!"},
  {id: 3 , message:"Inna Lillahi, Ina illahi Radzhiun"}
  
]




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
