
import s from './DialogsItem.module.css'

const DialogsItem = (props) => {

    return(

            <div className={s.dialogsItem}>
                <h2>DIALOGS</h2>
                {/* <div className={s.dialog}> Dilshod </div>
                <div className={s.dialog}> Muhammed </div>
                <div className={s.dialog}> Iskandar </div>
                <div className={s.dialog}> Zafar </div>
                <div className={s.dialog}> Shukur </div> */}

                <ul>
                    <li className={s.dialog}>Dilshod</li>
                    <li className={s.dialog}>Muhammed</li>
                    <li className={s.dialog}>Iskandar</li>
                    <li className={s.dialog}>Zafar</li>
                    <li className={s.dialog}>Shukur</li>
                </ul>

            </div>


    )

}

export default DialogsItem