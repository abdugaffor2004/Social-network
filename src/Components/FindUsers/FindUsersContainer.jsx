import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/users-reducer";
import FindUsers from "./FindUsers";
import FindUsersF from "./FindUsersF";

let mapStateToProps = (state) =>{

    return{
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => dispatch( followAC(userId) ),
        unfollow: (userId) => dispatch( unfollowAC(userId) ),
        setUsers: (users) => dispatch( setUsersAC(users) )
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer