
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    // Рендеринг DialogsItem и Messages используя данные из state
    let dialogsElements = props.dialogsData.map(item => <DialogsItem key={item.id} img={item.img} name={item.name} id={item.id} />)
    let messagesElements = props.messagesData.map(item => <Messages key={item.id} message={item.message} id={item.id} />)


    function onMessageChangeCaller(event) {
        // Получение данных из textarea 2 способ через event target
        const value = event.target.value
        props.onMessageChange(value)

    }

    let addNewMessageCaller = () =>{
       props.addNewMessage()
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
                    <textarea value={props.newMessageText} onChange={onMessageChangeCaller} placeholder='Enter your message...' rows={3}></textarea>
                    <div className={s.controlls}> <button onClick={addNewMessageCaller} className={s.btn} type="submit"> Send </button> </div>
                </div>

            </div>
        </div>

    )

}

export default Dialogs