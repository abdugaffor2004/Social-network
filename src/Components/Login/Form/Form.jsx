import { Field, reduxForm } from 'redux-form'
import s from './Form.module.css'
import { customInput } from '../../../Common/FormControll/FormControll'
import { required } from '../../../Utilities/Validators'


const LoginForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className={ `${s.form} ${props.error &&  s.errorOnForm}` }>
            <div> <Field validate={[required]} name='email' className={s.login} component={customInput} type="text" placeholder="Enter email" /> </div>
            <div> <Field validate={[required]} name='password' className={s.password}  component={customInput} type="password" placeholder="Enter password"/> </div> 
            <div>  <Field name='rememberMe' className={s.checkbox} component={"input"} type="checkbox"/> Remember me </div>

            {props.captchaUrl && 
                <div className={s.captchaWrap}>
                    <img src={props.captchaUrl} alt="Cpatcha" />
                    <Field name='captchaValue' component='input' />
                </div>}

            <span className={s.wholeFormError}> {props.error} </span>

            <div className={s.buttonWrap}> <button className={s.button} type="submit"> Sumbit </button> </div> 
        </form>
    )
}


let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm
