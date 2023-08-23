import { updateObjectInArray } from "../Utilities/helperFunctions";
import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_ISFETCHING = "SET-ISFETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SET-FOLLOWING-IN-PROGRESS";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
};

const usersReducer = (state = initialState, action) => {
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

        users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})
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

export let followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export let setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export let setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export let setIsFetchingAC = (isFetchingStatus) => {
  return { type: SET_ISFETCHING, isFetchingStatus };
};

export let toggleFollowingProgressAC = (isFetchingStatus) => {
  return { type: SET_FOLLOWING_IN_PROGRESS, isFetchingStatus };
};

export let setTotalUsersCountAC = (totalUsersCount) =>{
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

