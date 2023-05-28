import LoginReduxForm from "./Form/Form"
import s from './Login.module.css'


const LoginPage = () =>{

    const onSubmit = (formData)=>{
        console.log(formData)
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

export default LoginPage