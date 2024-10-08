
import React from "react";
import { connect } from "react-redux";
import { getProfileThunkCreator, setProfileStatusThunkCreator, setUserProfileAC, updateProfileDataThunkCreator, updateProfilePhotoThunkCreator, updateProfileStatusThunkCreator } from "../../Redux/profile-reducer.ts";
import Profile from "./Profile";
import withRouter from "../../HOC/withRouter";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getAuthorizedUserId, getIsAuth, getProfile, getProfileStatus } from "../../Redux/Selectors/profile-selector";
import { ErrorBoundary } from "../../Utilities/Boundary/boundary";
import { withBoundary } from "../../HOC/withBoundary";




class ProfileContainer extends React.Component{
    componentDidMount = () =>{
        let userId = this.props.router.params.userId

        if(!userId && this.props.isAuth){
            userId = this.props.authorizedUserId
        }

        this.props.getProfileThunk(userId)
        this.props.setProfileStatusThunk(userId) // получаем из API статус и записываем его в state(используем thunk) 
    
    }
    
    
    

    render(){
        //throw new Error("profileCrashed") //если хочешь проверить работу Предохранителей <ErrorBoundary>, то раскомментируй этот код
        return(
            
           <Profile {...this.props} updateProfileDataThunk={this.props.updateProfileDataThunk} updateProfilePhotoThunk={this.props.updateProfilePhotoThunk} isOwner={!this.props.router.params.userId} profile={this.props.profile} updateProfileStatusThunk={this.props.updateProfileStatusThunk}/>
            
        )
    }

}


// let mapStateToProps = (state) => {
//     return{
//         profile: state.profilePage.profile,
//         profileStatus: state.profilePage.profileStatus,
//         authorizedUserId: state.auth.id,
//         isAuth: state.auth.isAuth
        
//     }
// }

let mapStateToProps = (state) => {
    return{
        profile: getProfile(state),
        profileStatus: getProfileStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getIsAuth(state),
        isInitialized: state.app.isInitialized
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setUserProfile: (profile) => dispatch( setUserProfileAC(profile) ),
        getProfileThunk: (userId) => dispatch(getProfileThunkCreator(userId)),
        setProfileStatusThunk: (userId) => dispatch( setProfileStatusThunkCreator(userId) ),
        updateProfileStatusThunk: (profileStatus) => dispatch( updateProfileStatusThunkCreator(profileStatus) ),
        updateProfilePhotoThunk: (photo) => dispatch(updateProfilePhotoThunkCreator(photo)),
        updateProfileDataThunk: (profile) => dispatch( updateProfileDataThunkCreator(profile))

        
    }
}

// After:
export default compose(
    withBoundary,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)
(ProfileContainer) // конвеер обработчиков(withAuthRedirect, withRouter, connect). идет снизу вверх



//Before: // let withAuthRedirectComponent = withAuthRedirect( ProfileContainer )// HOC проверки на redirect

// let withRouterComponent = withRouter(withAuthRedirectComponent) 

// export default connect(mapStateToProps, mapDispatchToProps)( withRouterComponent )

