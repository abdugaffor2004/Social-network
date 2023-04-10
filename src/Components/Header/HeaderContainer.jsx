
import axios from "axios"
import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { setAuthUserDataAC, setMyprofileDataAC } from "../../Redux/auth-reducer"


class HeaderContainer extends React.Component{

    componentDidMount(){

        axios.get( 'https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials:true}  )
            .then((response) => {
            // debugger
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                this.props.setAuthUserData( id, email, login ) // Эти параметры должны быть такими же как в API
            }

        })

        // axios.get( 'https://social-network.samuraijs.com/api/1.0/profile/' + this.props.id )
        //         .then((response) => {
        //         debugger
        //         this.props.setMyprofileData(response.data)
        //     })

    
    }

    
    render(){
        debugger
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
    //setMyprofileData: (myProfile) => dispatch( setMyprofileDataAC(myProfile) )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer) 