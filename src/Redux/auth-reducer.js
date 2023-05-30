import { authApi } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA ";



let initialState = {
    id: null,
    eMail: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
    
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }

    default:
      return state;
  }
};

export default authReducer;

export let setAuthUserDataAC = (id, eMail, login) => {
  return { type: SET_AUTH_USER_DATA, data:{id, eMail, login} };
};



export let authThunkCreator = () =>{
  return (dispatch) =>{
    authApi.authMe().then((response) => {
      if(response.resultCode === 0){
          let {id, email, login} = response.data
          dispatch( setAuthUserDataAC( id, email, login ) )  // Эти параметры должны быть такими же как в API
      }

  })
  }
}

