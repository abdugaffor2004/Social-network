
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    return(

        <div className={s.dialogs}>
            <DialogsItem />

            <Messages />
        </div>

    )

}

export default Dialogs