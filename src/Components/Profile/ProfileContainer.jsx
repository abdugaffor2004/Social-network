
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/profile-reducer";
import Profile from "./Profile";
import { profileApi } from "../../api/api";
import withRouter from "../../HOC/withRouter";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component{
    componentDidMount(){
    let userId = this.props.router.params.userId

    
    if(!userId){userId = 10}
    profileApi.getProfile(userId).then((response) => {
        this.props.setUserProfile(response);
      })
    } 

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setUserProfile: (profile) => dispatch( setUserProfileAC(profile) )
    }
}


let withAuthRedirectComponent = withAuthRedirect( ProfileContainer )// HOC проверки на redirect

let withRouterComponent = withRouter(withAuthRedirectComponent) 

export default connect(mapStateToProps, mapDispatchToProps)( withRouterComponent )

