
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    return(

        <div className={s.dialogs}>
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

            <div className={s.messages}>
                <div className={s.message}>
                    Hey, yo!
                </div>

                <div className={s.message}>
                    Why anybody don't love me?
                </div>

                <div className={s.message}>
                    Inna Lillahi, Ina illahi Radzhiun
                </div>
            </div>
        </div>

    )

}

export default Dialogs