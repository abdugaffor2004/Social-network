const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
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

  newMessageText: "La rahta Fid Dunia",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      if (state.newMessageText !== "") {
        state.messagesData.push(newMessage);
      }

      state.newMessageText = "";
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;

export let updateMessageActionCreator = (value) => {
  return { type: UPDATE_MESSAGE_TEXT, newText: value };
};
export let addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
