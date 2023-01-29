
import s from './Messages.module.css'

const Messages = (props) => {

    return(

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

    )

}

export default Messages