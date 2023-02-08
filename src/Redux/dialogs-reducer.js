const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }

            if (state.newMessageText !== "") {
                state.messagesData.push(newMessage)
            }

            state.newMessageText = ""
            return state

        default: return state
    }

   

    
}

export default dialogsReducer