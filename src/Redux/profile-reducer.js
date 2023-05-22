import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEWPOST_TEXT = "UPDATE-NEWPOST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      message: "Hey, why nobody love me ?",
    },

    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      message: "Hi everyone! It's already my second post!",
    },

    {
      id: 3,
      img: "https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      message: "I love chocolate.",
    },

    {
      id: 4,
      img: "https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      message: "I am fun of React! ",
    },
  ],
  newPostText: "",
  profile: null,
  profileStatus: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEWPOST_TEXT: {
    
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    case ADD_POST: {
      //debugger
      let newPost = {
        id: 5,
        img: "https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        message: state.newPostText,
      };

      let stateCopy = {
        ...state,
        postsData: [...state.postsData],
      };

      if (stateCopy.newPostText !== "") {
        stateCopy.postsData.push(newPost);
      }

      stateCopy.newPostText = ""; // очищение textarea после публикации поста
      
      return stateCopy;
    }

    case SET_USER_PROFILE:{
      return{
        ...state,
        profile: action.profile
      }
    }

    case SET_PROFILE_STATUS:{
      return{
        ...state,
        profileStatus: action.profileStatus
      }
    }

    default:
      return state;
  }
};

export default profileReducer;

export let addPostActionCreator = () => {
  return { type: ADD_POST };
};
export let updateNewPostActionCreator = (value) => {
  return { type: UPDATE_NEWPOST_TEXT, newText: value };
};

export let setUserProfileAC = (profile) =>{
  return{ type: SET_USER_PROFILE, profile }
}

export let setProfileStatusAC = (profileStatus) =>{
  return {type: SET_PROFILE_STATUS, profileStatus}
}




export let getProfileThunkCreator = (userId = 28690) => {

  return(dispatch) =>{
   
      profileApi.getProfile(userId).then((response) => {
          dispatch( setUserProfileAC(response) ) 
      })
  }

}

export let setProfileStatusThunkCreator = (userId = 28690) =>{
  return (dispatch)=>{
    profileApi.getStatus(userId).then( (response) => dispatch( setProfileStatusAC(response) ))
  }
}

export let updateProfileStatusThunkCreator = (profileStatus) => {
  return (dispatch) =>{
    profileApi.updateStatus(profileStatus).then( response =>{

      if(response.resultCode===0){
        dispatch( setProfileStatusAC(profileStatus) )
        
      }

    } )
  }
}

