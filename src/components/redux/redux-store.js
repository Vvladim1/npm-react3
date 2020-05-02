import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;