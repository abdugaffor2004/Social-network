import { Field, reduxForm } from "redux-form"
import s from './NewPostForm.module.css'
import { maxLength, required } from "../../../Utilities/Validators"


const NewPostForm = (props) =>{
    
    return (
        
        <form onSubmit={props.handleSubmit}>
            
            <Field validate={[required, maxLength(150)]} component={'textarea'} name="postText"  placeholder='your news...' rows="3" ></Field>
            <div className={s.controlls}> <button className={s.btn} type="submit"> Send </button> </div>
        
        </form>
        

        
    )
}




export default reduxForm({form: "newPost"})(NewPostForm)