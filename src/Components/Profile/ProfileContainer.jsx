import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/profile-reducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component{
    componentDidMount(){
    
    axios
        .get(
        `https://social-network.samuraijs.com/api/1.0/profile/8`
        )
        .then((response) => {
        this.props.setUserProfile(response.data);
        

      })
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setUserProfile: (profile) => dispatch( setUserProfileAC(profile) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

