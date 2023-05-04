import { connect } from "react-redux";
import {
  followAC,
  getUsersThunkCreator,
  setCurrentPageAC,
  setCurrentPageThunkCreator,
  setIsFetchingAC,
  setUsersAC,
  toggleFollowingProgressAC,
  unfollowAC,
} from "../../Redux/users-reducer";

import FindUsersContainer_2 from "./FindUsersContainer_2";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalPageCount: state.userPage.totalPageCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    //setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setIsFetching: (isFetchingStatus) => dispatch(setIsFetchingAC(isFetchingStatus)),
    toggleFollowingProgress: (isFetchingStatus) => dispatch( toggleFollowingProgressAC(isFetchingStatus) ),

    getUsersThunk: (pageSize, currentPage) => dispatch( getUsersThunkCreator(pageSize, currentPage) ),
    setCurrentPageThunk: ( pageSize, currentPage ) => dispatch( setCurrentPageThunkCreator(pageSize, currentPage) )
  };
};

const FindUsersContainer_1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersContainer_2);

export default FindUsersContainer_1;
