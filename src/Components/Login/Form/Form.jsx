import { Field, reduxForm } from 'redux-form'
import s from './Form.module.css'

const LoginForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div> <Field name='Login' className={s.login} component={"input"} type="text" placeholder="Enter login" /> </div>
            <div> <Field name='Password' className={s.password}  component={"input"} type="password" placeholder="Enter password"/> </div> 
            <div>  <Field name='RememberMe' className={s.checkbox} component={"input"} type="checkbox"/> Remember me </div>
            <div className={s.buttonWrap}> <button className={s.button} type="submit"> Sumbit </button> </div> 
        </form>
    )
}


let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm
