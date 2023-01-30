
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    return(

        <div className={s.dialogs}>
            
            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>
                <DialogsItem name='Dilshod' id='1' />
                <DialogsItem name='Muhammed' id='2' />
                <DialogsItem name='Iskandar' id='3' />
                <DialogsItem name='Zafar' id='4' />
                <DialogsItem name='Shukur' id='5' />
            </div>

            <div className={s.messages}>
                <Messages message='Hey, yo!' />
                <Messages message="Why anybody don't love me?" />
                <Messages message='Inna Lillahi, Ina illahi Radzhiun' />
            </div>
        </div>

    )

}

export default Dialogs