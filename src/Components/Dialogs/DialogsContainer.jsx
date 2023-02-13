
import React from 'react'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let onMessageChange = (value) =>{
        props.store.dispatch( updateMessageActionCreator(value) )
    }

    let addNewMessage = () =>{
        props.store.dispatch( addMessageActionCreator() )
    }

    return (
       <Dialogs onMessageChange={onMessageChange} addNewMessage={addNewMessage}
                dialogsData={state.dialogsPage.dialogsData}
                messagesData={state.dialogsPage.messagesData}
                newMessageText={state.dialogsPage.newMessageText}
        />
    )

}

export default DialogsContainer