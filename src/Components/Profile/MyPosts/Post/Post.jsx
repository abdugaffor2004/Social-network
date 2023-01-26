 import s from './Post.module.css'
 
 const Post = () =>{

    return(

        <div className={s.post}>
            <img src="https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Avatar" />
            <p> Hey, why nobody love me ? </p>
        </div>
    
    )

 }

 export default Post