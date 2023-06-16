import { authApi } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA ";
const DELETE_USER_AUTH_DATA = "DELETE-USER-AUTH-DATA";   



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
        ...action.payload,
        isAuth: true
      };
    }

    case DELETE_USER_AUTH_DATA:{
      return{
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false
      }
    }

    default:
      return state;
  }
};

export default authReducer;

export let setAuthUserDataAC = (id, eMail, login) => {
  return { type: SET_AUTH_USER_DATA, payload:{id, eMail, login} };
};

export let deleteAuthUserData = ()=>{
  return {type: DELETE_USER_AUTH_DATA}
}


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


export let LoginthunkCreator = (email, password, rememberMe) =>{
  return (dispatch) =>{
    authApi.authLogin(email, password, rememberMe).then( (response) => {
      if(response.resultCode === 0){
        dispatch(authThunkCreator())
      }
    } )
  }
}

export let LogoutThunkCreator = () =>{
  return (dispatch) =>{
    authApi.authLogout().then( (response) => { // Вылогиниваемся
      if(response.resultCode === 0){
        dispatch(deleteAuthUserData()) // Удаляем данные
        dispatch(authThunkCreator()) // Проверяем авторизацию
        //P.S: не забывай что мы диспатчем вызов санккриетора. Короче нужно скобку поставить после санки на 80 строке
      }
    } )
  }
}

