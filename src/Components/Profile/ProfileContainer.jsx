import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/profile-reducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileApi } from "../../api/api";


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

function withRouter(Component) {

	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}

	return ComponentWithRouterProp;
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(ProfileContainer) )

