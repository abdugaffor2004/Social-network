
import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'

const DialogsItem = (props) => {

    return(

        <ul>
            <img src={props.img} alt="Avatar" />
            <li className={s.dialog}> <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink> </li>
        </ul>

    )

}

export default DialogsItem