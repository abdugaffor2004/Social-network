import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalAC, setUsersAC, unfollowAC } from "../../Redux/users-reducer";
import FindUsers from "./FindUsers";
import FindUsersF from "./FindUsersF";

let mapStateToProps = (state) =>{

    return{
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalPageCount: state.userPage.totalPageCount,
        currentPage: state.userPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => dispatch( followAC(userId) ),   
        unfollow: (userId) => dispatch( unfollowAC(userId) ),
        setUsers: (users) => dispatch( setUsersAC(users) ),
        setCurrentPage: (currentPage) => dispatch( setCurrentPageAC(currentPage) )
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer