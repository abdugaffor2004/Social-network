import { Field, reduxForm } from 'redux-form'
import s from './Form.module.css'
import { required } from '../../Utilities/Validators'
import { customInput } from '../../../Common/FormControll/FormControll'

const LoginForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div> <Field validate={[required]} name='Login' className={s.login} component={customInput} type="text" placeholder="Enter login" /> </div>
            <div> <Field validate={[required]} name='Password' className={s.password}  component={customInput} type="password" placeholder="Enter password"/> </div> 
            <div>  <Field name='RememberMe' className={s.checkbox} component={"input"} type="checkbox"/> Remember me </div>
            <div className={s.buttonWrap}> <button className={s.button} type="submit"> Sumbit </button> </div> 
        </form>
    )
}


let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm
