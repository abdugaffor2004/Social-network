import { updateObjectInArray } from "../Utilities/helperFunctions";
import { userApi } from "../api/api";
import { UserType } from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_ISFETCHING = "SET-ISFETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SET-FOLLOWING-IN-PROGRESS";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"


export type InitialStateType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: boolean
}

export type FollowActionType = {
  type: typeof FOLLOW,
  userId: number
}
export type UnfollowActionType = {
  type: typeof UNFOLLOW,
  userId: number
}
export type SetUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}
export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}
export type SetIsFetchingActionType = {
  type: typeof SET_ISFETCHING,
  isFetchingStatus: boolean
}
export type ToggleFollowingProgressActionType = {
  type: typeof SET_FOLLOWING_IN_PROGRESS,
  isFetchingStatus: boolean
}
export type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT,
  totalUsersCount: number
}


const initialState:InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
};



const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, {followed: true}),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }

        //   return u;
        // }), вынесли эту логику в отдельную функцию helper

        users: updateObjectInArray(state.users, 'id', action.userId, {followed: false}),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_ISFETCHING: {
      return {
        ...state,
        isFetching: action.isFetchingStatus,
      };
    }

    case SET_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetchingStatus,
      };
    }

    case SET_TOTAL_USER_COUNT:{
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }

    default:
      return state;
  }
};

export default usersReducer;

export let followAC = (userId:number): FollowActionType => {
  return { type: FOLLOW, userId };
};

export let unfollowAC = (userId:number):UnfollowActionType => {
  return { type: UNFOLLOW, userId };
};

export let setUsersAC = (users:Array<UserType>):SetUsersActionType => { // Danger!!!!!
  return { type: SET_USERS, users };
};

export let setCurrentPageAC = (currentPage:number):SetCurrentPageActionType => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export let setIsFetchingAC = (isFetchingStatus:boolean): SetIsFetchingActionType => {
  return { type: SET_ISFETCHING, isFetchingStatus };
};

export let toggleFollowingProgressAC = (isFetchingStatus:boolean): ToggleFollowingProgressActionType => {
  return { type: SET_FOLLOWING_IN_PROGRESS, isFetchingStatus };
};

export let setTotalUsersCountAC = (totalUsersCount:number): SetTotalUsersCountActionType =>{
  return {type: SET_TOTAL_USER_COUNT, totalUsersCount}
}



export let getUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch( setIsFetchingAC(true) ); //Пока делается ассинхронный запрос показывается спиннер

    userApi
      .getUsers(pageSize, currentPage)
      .then((response) => {
        console.log(response)
        dispatch( setUsersAC(response.items) ) ;
        dispatch( setTotalUsersCountAC(response.totalCount) )
        dispatch( setIsFetchingAC(false) ) ; // После запроса спиннер убирается
      });
  };

}; // Замыкание(closure)   


export let setCurrentPageThunkCreator = (pageSize, currentPage) =>{

  return (dispatch) =>{
    dispatch( setIsFetchingAC(true) ); //Пока делается ассинхронный запрос показывается спиннер
    
      userApi.getUsers(pageSize, currentPage).then((response) => {
        dispatch( setUsersAC(response.items) );
        dispatch( setIsFetchingAC(false) ); // После запроса спиннер убирается
      });

      dispatch( setCurrentPageAC(currentPage) )
  }

}

export let unfollowThunkCreator = (userId) =>{

  // return (dispatch) =>{
  //   dispatch( setIsFetchingAC(true) ) 
  //   userApi.unfollowUser(userId).then((response) => {
  //     if(response.resultCode === 0) dispatch( unfollowAC(userId) )  
  //     dispatch( setIsFetchingAC(false) ) 
  //   });

  // }

  return followUnfollowTempplate(userApi.unfollowUser, unfollowAC, userId)

}

export let followThunkCreator = (userId) =>{

  // return (dispatch) =>{

  //   dispatch( setIsFetchingAC(true) ); 

  //   userApi.followUser(userId).then( (response) => { 
  //     if(response.resultCode === 0){ dispatch( followAC(userId) )  }
      
  //     dispatch( setIsFetchingAC(false) ) 
  //   });

  // } // Избавились от дублирования кода

  return followUnfollowTempplate(userApi.followUser, followAC, userId)

}

let followUnfollowTempplate = (apiFunc, actionCreator, payload) => (dispatch) => {
    dispatch(setIsFetchingAC(true));

    apiFunc(payload).then((response) => {
      if (response.resultCode === 0) { dispatch(actionCreator(payload)) }
      dispatch(setIsFetchingAC(false))
    });

  
}

