import { connect } from "react-redux"
import { LoginthunkCreator } from "../../Redux/auth-reducer.ts"
import LoginReduxForm from "./Form/Form"
import s from './Login.module.css'
import { Navigate } from "react-router-dom"


const LoginPage = (props) =>{

    const onSubmit = (formData)=>{
        let {email, password, rememberMe, captchaValue} = formData
        props.loginThunk(email, password, rememberMe, captchaValue)
    }

    if(props.isAuth) return <Navigate to={'/profile'}/> // Редирект на профиль при успешной логинизации 

    return(
        <div className={s.loginPage}>

            <h1>LOGIN PAGE</h1>

            <div className={s.formWrap}>
                <LoginReduxForm {...props} onSubmit={onSubmit}/>

            </div>
            
        </div>
    )

}


const mapDispatchToProps = (dispatch) =>{
    return {
        loginThunk : (email, password, remeberMe, captchaValue) => dispatch(LoginthunkCreator(email, password, remeberMe, captchaValue)) 
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage) 