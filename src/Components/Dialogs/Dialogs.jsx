
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    // Рендеринг DialogsItem и Messages используя данные из state
    let dialogsElements = props.state.dialogsData.map(item => <DialogsItem img={item.img} name={item.name} id={item.id} />)
    let messagesElements = props.state.messagesData.map(item => <Messages message={item.message} id={item.id} />)

    // Получение данных из textarea
    let textareaAnchor = React.createRef() // создаем и вешаем якорь на textarea чтобы потом его найти
    let newMessage = () => {
        const value = textareaAnchor.current.value
        alert(value)
    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                <div>
                    {messagesElements}
                </div>

                <form action='#' className={s.newMessage}>
                    <textarea ref={textareaAnchor} placeholder='your news...' rows="3"></textarea>
                    <div className={s.controlls}> <button onClick={newMessage} className={s.btn} type="submit"> Send </button> </div>
                </form>

            </div>
        </div>

    )

}

export default Dialogs