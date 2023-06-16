import { connect } from "react-redux"
import { LoginthunkCreator } from "../../Redux/auth-reducer"
import LoginReduxForm from "./Form/Form"
import s from './Login.module.css'


const LoginPage = (props) =>{

    const onSubmit = (formData)=>{
        console.log(formData)
        let {email, password, remeberMe} = formData
        props.loginThunk(email, password, remeberMe)
    }

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

export default connect( null, mapDispatchToProps )(LoginPage) 