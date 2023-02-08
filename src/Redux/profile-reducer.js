

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT'


const profileReducer = (state, action) => {

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