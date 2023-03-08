const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [],
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
