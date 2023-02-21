import { connect } from "react-redux";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) =>{

    return{
        users: state.findUsers.users
    }

}

const FindUsersContainer = connect(mapStateToProps)(FindUsers)

export default FindUsersContainer