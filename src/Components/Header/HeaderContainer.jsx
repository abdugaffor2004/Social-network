
import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { LogoutThunkCreator} from "../../Redux/auth-reducer.ts"


class HeaderContainer extends React.Component{

    
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
    logOutThunk: () => dispatch( LogoutThunkCreator() )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer) 