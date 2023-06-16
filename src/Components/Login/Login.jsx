import { connect } from "react-redux"
import { LoginthunkCreator } from "../../Redux/auth-reducer"
import LoginReduxForm from "./Form/Form"
import s from './Login.module.css'
import { Navigate } from "react-router-dom"


const LoginPage = (props) =>{

    const onSubmit = (formData)=>{
        console.log(formData)
        let {email, password, remeberMe} = formData
        props.loginThunk(email, password, remeberMe)
    }

    if(props.isAuth) return <Navigate to={'/profile'}/> // Редирект на профиль при успешной логинизации 

    return(
        <div className={s.loginPage}>

            <h1>LOGIN PAGE</h1>

            <div className={s.formWrap}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            
        </div>
    )

}


const mapDispatchToProps = (dispatch) =>{
    return {
        loginThunk : (email, password, remeberMe) => dispatch(LoginthunkCreator(email, password, remeberMe)) 
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage) 