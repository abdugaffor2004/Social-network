
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map( item => <DialogsItem name={item.name} id={item.id} /> )
    let messagesElements = props.state.messagesData.map( item => <Messages message={item.message} id={item.id} /> )


    return(

        <div className={s.dialogs}>
            
            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>

                {dialogsElements}
                

            </div>

            <div className={s.messages}>

                {messagesElements}
                
            </div>
        </div>

    )

}

export default Dialogs