import { Field, reduxForm } from "redux-form"
import s from './NewPostForm.module.css'
import { maxLength10, required } from "../../../Utilities/Validators"
import { customTextarea } from "../../../../Common/FormControll/FormControll"


const NewPostForm = (props) =>{
    
    return (
        
        <form onSubmit={props.handleSubmit}>
            
            <Field validate={[required, maxLength10]} component={customTextarea} name="postText"  placeholder='your news...' rows="3" />
            <div className={s.controlls}> <button className={s.btn} type="submit"> Send </button> </div>
        
        </form>
        

        
    )
}




export default reduxForm({form: "newPost"})(NewPostForm)