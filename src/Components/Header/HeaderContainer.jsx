
import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { authThunkCreator, setAuthUserDataAC} from "../../Redux/auth-reducer"


class HeaderContainer extends React.Component{

    componentDidMount(){

        //1 axios.get( 'https://social-network.samuraijs.com/api/1.0/profile/' + this.props.id )
        //         .then((response) => {
        //         debugger
        //         this.props.setMyprofileData(response.data)
        //     })

        // authApi.authMe().then((response) => {
        //         // debugger
        //         if(response.resultCode === 0){
        //             let {id, email, login} = response.data
        //             this.props.setAuthUserData( id, email, login ) // Эти параметры должны быть такими же как в API
        //         }
        //     })


        this.props.authThunk()

        
    }

    
    render(){
        
        return(
            <>
                <Header {...this.props} />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return({
        id : state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        //myProfile: state.auth.myProfile
    })
}

const mapDispatchToProps = (dispatch) => {
   return{
    setAuthUserData: (userId, eMail, login) =>  dispatch( setAuthUserDataAC(userId, eMail, login) ),

    authThunk: () => dispatch( authThunkCreator() )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer) 