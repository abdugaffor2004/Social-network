import { connect } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageThunkCreator,
  unfollowThunkCreator,
} from "../../Redux/users-reducer.ts";

import FindUsersContainer_2 from "./FindUsersContainer_2";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
    isAuth: state.auth.isAuth
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

let withRedirectComponent = withAuthRedirect(FindUsersContainer_2)

const FindUsersContainer_1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRedirectComponent);

export default FindUsersContainer_1;
