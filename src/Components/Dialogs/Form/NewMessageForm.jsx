import { Field, reduxForm } from "redux-form"
import s from './NewMessageForm.module.css'

const NewMessageForm = (props) =>{


    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="messageText" component={'textarea'} placeholder='Enter your message...' rows={3} />
            <div className={s.controlls}> <button className={s.btn} type="submit"> Send </button> </div>
        </form>
    )
    

}

export default reduxForm({form:'NewMessageForm'})(NewMessageForm)