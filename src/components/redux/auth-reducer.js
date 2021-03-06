import { authAPI } from '../../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "samurai-nerwork/auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
//   isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
        // isAuth: true
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {
    userId,
    email,
    login,
    isAuth
} });

export const getAuthUserDataThunk = () => async(dispatch) => {
  let response = await authAPI.me();
  // .then(response => {
        let {id, email, login} = response.data.data;
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true));
        }
        // });
}

export const login = (email, password, rememberMe) => async(dispatch) => {
  
  let response = await authAPI.login(email, password, rememberMe);
        //  .then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserDataThunk('login', {email: 'Email is wrong'}));
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
          dispatch(stopSubmit('login', {_error: message}));
        }
        // });
}

export const logout = () => async(dispatch) => {
  let response = await authAPI.logout();
        //  .then(response => {
        if(response.data.resultCode === 0){
          dispatch(setAuthUserData(null, null, null, false));
        }
        // });
}

export default authReducer;
