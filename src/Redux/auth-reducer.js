const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA ";
const SET_MY_PROFILE_DATA = "SET-MY-PROFILE-DATA ";


let initialState = {
    id: null,
    eMail: null,
    login: null,
    isAuth: false,

    myProfile: null,
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

    case SET_MY_PROFILE_DATA: {
        return{
            ...state,
            myProfile: action.myProfile
        }
    }

    default:
      return state;
  }
};

export default authReducer;

export let setAuthUserDataAC = (id, eMail, login) => {
  return { type: SET_AUTH_USER_DATA, data:{id, eMail, login} };
};

export let setMyprofileDataAC = (myProfile) => {
    return { type: SET_MY_PROFILE_DATA, myProfile};
};
