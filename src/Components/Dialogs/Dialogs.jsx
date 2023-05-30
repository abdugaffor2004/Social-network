
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import NewMessageForm from './Form/NewMessageForm'

const Dialogs = (props) => {

    // Рендеринг DialogsItem и Messages используя данные из state
    let dialogsElements = props.dialogsData.map(item => <DialogsItem key={item.id} img={item.img} name={item.name} id={item.id} />)
    let messagesElements = props.messagesData.map(item => <Messages key={item.id} message={item.message} id={item.id} />)


    // function onMessageChangeCaller(event) {
    //     // Получение данных из textarea 2 способ через event target
    //     const value = event.target.value
    //     props.onMessageChange(value)

    // }

    let addNewMessageCaller = (formData) =>{
        console.log(formData)
       props.addNewMessage(formData.messageText)
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
                    <NewMessageForm onSubmit={addNewMessageCaller}/>
                </div>

            </div>
        </div>

    )

}

export default Dialogs