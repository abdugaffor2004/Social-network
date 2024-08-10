import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import navbarReducer from "./navbar-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    userPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware))) // Подключаем redux DevTools

window.store = store

export default store