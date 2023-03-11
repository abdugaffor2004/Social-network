const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

const initialState = {
  users: [],
  pageSize: 7,
  totalPageCount: 100,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case FOLLOW:
      {
        return {
          ...state,
          //users: [...state.users] В этом случае так копировать не получится
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        };
    }
 
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }

          return u;
        }),
      };
    }

    case SET_USERS:{
      return{
        ...state,
        users: [...action.users]
      }
    }

    case SET_CURRENT_PAGE:{
      return{
        ...state,
        currentPage: action.currentPage
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

export let setUsersAC = (users) =>{
  return {type: SET_USERS, users}
}

export let setCurrentPageAC = (currentPage) =>{
  return {type: SET_CURRENT_PAGE, currentPage}
}

// export let setTotalAC = (totalUsersCount) => {
//   return { type: SET_TOTAL, totalUsersCount };
// };