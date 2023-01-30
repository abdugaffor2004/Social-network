
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1 , name:"Dilshod"},
        {id: 2 , name:"Muhammed"},
        {id: 3 , name:"Iskandar"},
        {id: 4 , name:"Zafar"},
        {id: 5 , name:"Shukur"}
    ]

    let messagesData = [
        {id: 1 , message:"How is your react learning?"},
        {id: 2 , message:"Hey, yo!"},
        {id: 3 , message:"Inna Lillahi, Ina illahi Radzhiun"}
        
    ]

    let dialogsElements = dialogsData.map( item => <DialogsItem name={item.name} id={item.id} /> )
    let messagesElements = messagesData.map( item => <Messages message={item.message} id={item.id} /> )


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