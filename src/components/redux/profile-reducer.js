import { userAPI, profileAPI } from "../../api/api"


const ADD_NEW_POST = "ADD-NEW-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
      { id: 1, message: "Hello!", likesCounte: 15 },
      { id: 2, message: "how are you!", likesCounte: 20 },
      { id: 3, message: "Very vell!", likesCounte: 18 },
      { id: 4, message: "Wow", likesCounte: 12 }
    ],
    profile: null,
    status: ''
  
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCounte: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
      case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getUserProfileThunk = (userId) => {//"thankA"
  return async (dispatch) => {
    let response = await userAPI.getProfile(userId)
      dispatch(setUserProfile(response.data));
  }
}

export const getStatusThunk = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data));
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  }
}

export default profileReducer;
