
import { connect } from "react-redux";
import {
  addMessageActionCreator,

} from "../../Redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs";


// const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   let onMessageChange = (value) => {
//     props.store.dispatch(updateMessageActionCreator(value));
//   };

//   let addNewMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   return (
//     <Dialogs
//       onMessageChange={onMessageChange}
//       addNewMessage={addNewMessage}
//       dialogsData={state.dialogsPage.dialogsData}
//       messagesData={state.dialogsPage.messagesData}
//       newMessageText={state.dialogsPage.newMessageText}
//     />
//   );
// };



const mapStateToProps = (stateCopy) =>{
    return{
      dialogsData: stateCopy.dialogsPage.dialogsData,
      messagesData: stateCopy.dialogsPage.messagesData,
      newMessageText: stateCopy.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addNewMessage: (messageText) => dispatch(addMessageActionCreator(messageText))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
