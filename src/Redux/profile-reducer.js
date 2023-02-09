

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT'

let initialState = {

    postsData: [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            message: 'Hey, why nobody love me ?'
        },

        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            message: "Hi everyone! It's already my second post!"
        },

        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            message: "I love chocolate."
        },

        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            message: "I am fun of React! "
        }
    ],

    newPostText: ""

}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEWPOST_TEXT:
            state.newPostText = action.newText
            return state

        case ADD_POST:
            let newPost = {
                id: 5,
                img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                message: state.newPostText
            }
    
            if (state.newPostText !== '') {
                state.postsData.push(newPost)
            }
    
            state.newPostText = ""   // очищение textarea после публикации поста

            return state    

        default: return state  
    }

    
    
}

export default profileReducer




export let addPostActionCreator = () =>{
    return { type: ADD_POST}
}
export let updateNewPostActionCreator = (value) =>{
    return { type: UPDATE_NEWPOST_TEXT, newText: value}
}