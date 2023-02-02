import { rerenderEntireDOM } from "./render"

let state = {

    profilePage : {

        postsData: [
            {   id: 1,
                img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                message: 'Hey, why nobody love me ?'},
          
            {   id: 2,
                img: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                message: "Hi everyone! It's already my second post!"},
          
            {   id: 3,
                img: 'https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                message: "I love chocolate."},
            
            {   id: 4,
                img: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                message: "I am fun of React! "}
        ],

    },

    dialogsPage: {

        dialogsData: [
            {id: 1 , name:"Dilshod", img:"https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
            {id: 2 , name:"Muhammed", img:"https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
            {id: 3 , name:"Iskandar", img:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
            {id: 4 , name:"Zafar", img:"https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
            {id: 5 , name:"Shukur", img:"https://images.unsplash.com/photo-1565708097881-bbf4ecf47cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        ],
    
        messagesData: [
            {id: 1 , message:"How is your react learning?"},
            {id: 2 , message:"Hey, yo!"},
            {id: 3 , message:"Inna Lillahi, Ina illahi Radzhiun"}
            
        ]

    },
   
    navbar:{
        friends: [
            {id: 1 , name:"Dilshod", img:"https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
            {id: 2 , name:"Muhammed", img:"https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
            {id: 3 , name:"Iskandar", img:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        ]
    }

}

/* addPostBLL добавляет в state данные нового поста(id, message).
Эта функция вызывается там где эти данные мы получаем(MyPosts), a именно в функции addPostUI.
А прокидываем мы ее через пропсы */

export let addPostBLL = (messageText) => {
    let newPost = {
        id: 5,
        img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        message: messageText
    }

    if(messageText != ''){
        state.profilePage.postsData.push(newPost)
    }

    rerenderEntireDOM(state)
}

export default state