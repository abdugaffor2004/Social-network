import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/profile-reducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount(){
    let userId = this.props.router.params.userId

    
    if(!userId){userId = 10}
    axios
        .get(
        'https://social-network.samuraijs.com/api/1.0/profile/'+userId
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

