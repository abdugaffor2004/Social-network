
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'

const Dialogs = (props) => {

    // Рендеринг DialogsItem и Messages используя данные из state
    let dialogsElements = props.state.dialogsData.map(item => <DialogsItem img={item.img} name={item.name} id={item.id} />)
    let messagesElements = props.state.messagesData.map(item => <Messages message={item.message} id={item.id} />)

    
    let onMessageChange = (event) =>{
        // Получение данных из textarea 2 способ через event target
        const value = event.target.value
        props.dispatch( updateMessageActionCreator(value) )
    }

    let addNewMessage = () =>{
        props.dispatch( addMessageActionCreator() )
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
                

                <div className={s.newMessage}>
                    <textarea value={props.state.newMessageText} onChange={onMessageChange} placeholder='Enter your message...' rows="3"></textarea>
                    <div className={s.controlls}> <button onClick={addNewMessage} className={s.btn} type="submit"> Send </button> </div>
                </div>

            </div>
        </div>

    )

}

export default Dialogs