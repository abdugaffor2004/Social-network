import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store