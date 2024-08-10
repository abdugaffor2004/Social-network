import { profileApi } from "../api/api";
import { PhotosType, PostDataType, ProfileType } from "../types/types";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_PROFILE_STATUS = "profile/SET-PROFILE-STATUS";
const UPDATE_PROFILE_PHOTO = "profile/UPDATE-PROFILE-PHOTO";
const UPDATE_PROFILE_DATA = "profile/UPDATE-PROFILE-DATA";



type InitialStateType = {
  postsData: Array<PostDataType>,
  profile: ProfileType | null
  profileStatus: string
}

let initialState: InitialStateType = {
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
  profile: null,
  profileStatus: "",
};

const profileReducer = (state = initialState, action): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.floor(Math.random() * 100),
        img: "https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        message: action.postText,
      };

      let stateCopy = {
        ...state,
        postsData: [...state.postsData],
      };

      stateCopy.postsData.push(newPost); // 2 способ в dialogsReducer

      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case UPDATE_PROFILE_DATA: {
      return {
        ...state,
        profile: { ...state.profile, ...action.profileInfo },
      };
    }

    case SET_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.profileStatus,
      };
    }

    case UPDATE_PROFILE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;


export type AddPostActionType = {
  type: typeof ADD_POST,
  postText: string
}
export let addPostActionCreator = (postText:string): AddPostActionType => {
  return { type: ADD_POST, postText };
};


export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export let setUserProfileAC = (profile:ProfileType): SetUserProfileActionType => {
  return { type: SET_USER_PROFILE, profile };
};


export type SetProfileStatusActionType = {
  type: typeof SET_PROFILE_STATUS,
  profileStatus: string
}
export let setProfileStatusAC = (profileStatus:string): SetProfileStatusActionType => {
  return { type: SET_PROFILE_STATUS, profileStatus };
};


export type UpdateProfilePhotoActionType = {
  type: typeof UPDATE_PROFILE_PHOTO,
  photos: PhotosType
}
export let updateProfilePhotoAC = (photos: PhotosType): UpdateProfilePhotoActionType => {
  return { type: UPDATE_PROFILE_PHOTO, photos };
};


export type UpdateProfileActionType = {
  type: typeof UPDATE_PROFILE_DATA,
  profileInfo: ProfileType
}
export let updateProfileDataAC = (updatedProfileData:ProfileType): UpdateProfileActionType => {
  return { type: UPDATE_PROFILE_DATA, profileInfo: updatedProfileData };
};


export let getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((response) => {
      dispatch(setUserProfileAC(response));
    });
  };
};

export let setProfileStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi
      .getStatus(userId)
      .then((response) => dispatch(setProfileStatusAC(response)));
  };
};

export let updateProfileStatusThunkCreator = (profileStatus) => {
  return (dispatch) => {
    profileApi.updateStatus(profileStatus).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setProfileStatusAC(profileStatus));
      }
    });
  };
};

export let updateProfilePhotoThunkCreator = (photo) => {
  return (dispatch) => {
    profileApi.updatePhoto(photo).then((response) => {
      if (response.resultCode === 0) {
        dispatch(updateProfilePhotoAC(response.data.photos));
      }
    });
  };
};

export let updateProfileDataThunkCreator = (updatedProfileInfo) => {
  return (dispatch) => {
    profileApi.updateProfile(updatedProfileInfo).then((response) => {
      if (response.resultCode === 0) {
        dispatch(updateProfilePhotoAC(response.data.photos));
      }
    });
  };
};
