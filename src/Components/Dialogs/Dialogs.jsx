
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


    return(

        <div className={s.dialogs}>
            
            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>

            <div className={s.messages}>
                <Messages message={messagesData[0].message} />
                <Messages message={messagesData[1].message} />
                <Messages message={messagesData[2].message} />
            </div>
        </div>

    )

}

export default Dialogs