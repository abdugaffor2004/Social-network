import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA ";
const DELETE_USER_AUTH_DATA = "DELETE-USER-AUTH-DATA";  
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";



let initialState = {
    id: null,
    eMail: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    
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
        isAuth: false,
        captchaUrl: null
      }
    }

    case SET_CAPTCHA_URL:{
      return{
        ...state,
        captchaUrl: action.Url
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

export let setCaptchaUrlAC = (Url) =>{
  return{ type: SET_CAPTCHA_URL, Url }
}


export let authThunkCreator = () => (dispatch) =>{
  return authApi.authMe().then((response) => { 
    if(response.resultCode === 0){
        let {id, email, login} = response.data
        dispatch( setAuthUserDataAC( id, email, login ) )  // Эти параметры должны быть такими же как в API
    }

  })
}



export let LoginthunkCreator = (email, password, rememberMe, captchaValue) =>{
  return (dispatch) =>{

    authApi.authLogin(email, password, rememberMe, captchaValue).then( (response) => {
      if(response.resultCode === 0){
        dispatch(authThunkCreator())
      }
      else if(response.resultCode === 10){
        dispatch(captchaThunkCreator())
      }
      else{
        dispatch( stopSubmit( 'login', {_error: response.messages[0]} ) )
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


export let captchaThunkCreator = () =>{
  return (dispatch) =>{
    securityApi.getCaptcha().then( response =>{
      dispatch( setCaptchaUrlAC(response.url) )
    } )
  }
}
