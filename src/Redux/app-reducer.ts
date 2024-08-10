import { authThunkCreator } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS";

type InitialStateType = {
  isInitialized: boolean
}

export type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}


let initialState:InitialStateType = {
  isInitialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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



export let initializedSuccessAC = ():initializedSuccessActionType => {
  return { type: INITIALIZED_SUCCESS };
};



export let toInitializeAppThunkCreator = () => {
  return (dispatch) => {

    let promise = dispatch(authThunkCreator())

    Promise.all([promise]).then(() => dispatch(initializedSuccessAC()))


  }
}

