
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { updateMessageActionCreator } from '../../Redux/state'

const Dialogs = (props) => {

    // Рендеринг DialogsItem и Messages используя данные из state
    let dialogsElements = props.state.dialogsData.map(item => <DialogsItem img={item.img} name={item.name} id={item.id} />)
    let messagesElements = props.state.messagesData.map(item => <Messages message={item.message} id={item.id} />)

    // Получение данных из textarea
    let textareaAnchor = React.createRef() // создаем и вешаем якорь на textarea чтобы потом его найти

    let onMessageChange = () =>{
        const value = textareaAnchor.current.value
        props.dispatch( updateMessageActionCreator(value) )
    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                <div className={s.messagesWrap}>
                    {messagesElements}
                </div>

                <form action='#' className={s.newMessage}>
                    <textarea value={props.state.newMessageText} onChange={onMessageChange} ref={textareaAnchor} placeholder='your news...' rows="3"></textarea>
                    <div className={s.controlls}> <button onClick={''} className={s.btn} type="submit"> Send </button> </div>
                </form>

            </div>
        </div>

    )

}

export default Dialogs