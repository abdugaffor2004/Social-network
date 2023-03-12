import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setUsersAC,
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
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setIsFetching: (isFetchingStatus) => dispatch(setIsFetchingAC(isFetchingStatus)),
  };
};

const FindUsersContainer_1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsersContainer_2);

export default FindUsersContainer_1;
