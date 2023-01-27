 import s from './Post.module.css'
 
 const Post = (props) =>{

    return(

        <div className={s.post}>
            <img src= {props.img} alt="Avatar" />
            <p> {props.message} </p>
        </div>
    
    )

 }

 export default Post