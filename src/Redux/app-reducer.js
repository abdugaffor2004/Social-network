import { authThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS";



let initialState = {
  isInitialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        isInitialized: true
      }
    }

    default:
      return state;
  }
};

export default appReducer;

export let initializedSuccessAC = () => {
  return { type: INITIALIZED_SUCCESS };
};



export let toInitializeAppThunkCreator = () => {
  return (dispatch) => {

    let promise = dispatch(authThunkCreator())

    Promise.all([promise]).then(() => dispatch(initializedSuccessAC()))


  }
}

