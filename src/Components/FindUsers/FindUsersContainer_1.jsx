import { connect } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageThunkCreator,
  unfollowThunkCreator,
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
    // follow: (userId) => dispatch(followAC(userId)),
    // unfollow: (userId) => dispatch(unfollowAC(userId)),
    // setUsers: (users) => dispatch(setUsersAC(users)),
    //setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    //setIsFetching: (isFetchingStatus) => dispatch(setIsFetchingAC(isFetchingStatus)),
    // Нам эти функции больше не нужны так как мы перенесли всю логику их выполнения в Санки. 
    //Так как Санки находятся в редюсере, то мы вызываем эти функции(то есть вызов action creator -ов) точнее сказать сами actionCreator-ы напрямую из редюссера.

    getUsersThunk: (pageSize, currentPage) => dispatch( getUsersThunkCreator(pageSize, currentPage) ),
    setCurrentPageThunk: ( pageSize, currentPage ) => dispatch( setCurrentPageThunkCreator(pageSize, currentPage) ),
    unfollowThunk: (userId) => dispatch( unfollowThunkCreator(userId)),
    followThunk: (userId) => dispatch( followThunkCreator(userId) )
  };
};

const FindUsersContainer_1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersContainer_2);

export default FindUsersContainer_1;
