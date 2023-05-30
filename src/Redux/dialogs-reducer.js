
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Dilshod",
      img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Muhammed",
      img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Iskandar",
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Zafar",
      img: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Shukur",
      img: "https://images.unsplash.com/photo-1565708097881-bbf4ecf47cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],

  messagesData: [
    { id: 1, message: "How is your react learning?" },
    { id: 2, message: "Hey, yo!" },
    { id: 3, message: "Inna Lillahi, Ina illahi Radzhiun" },
  ],

};

const dialogsReducer = (state = initialState, action) => {
  
  /* Здесь есть одна непонятная мне вещь(поставь дебаггер после кейсов и увидишь). 
  После того как срабатывает Update_message_text 'state=initialState', 
  который в параметрах не меняется как и должно бытьб но после того как добавляется сообщение этот state меняется на значение newText.
  Просто я думал что меняется только созданная нами копия. */
  
  switch (action.type) {
    // case UPDATE_MESSAGE_TEXT: {
    //   //debugger
    //   return {
    //     ...state,
    //     newMessageText: action.newText,
    //   };
    // } Больше не требуется, так как используем redux-forms

    case ADD_MESSAGE: {
      //debugger;
      let newMessage = {
        id: Math.floor(Math.random() *100),
        message: action.messageText,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ""
      }; 
      // Это лучший вариант

    }

    default:
      return state;
  }
};

export default dialogsReducer;


export let addMessageActionCreator = (messageText) => {
  return { type: ADD_MESSAGE, messageText };
};
