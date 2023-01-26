import s from './MyPosts.module.css'
import Post from './Post/Post'
 
 const MyPosts = () =>{

    return(

        <div className={s.myPosts}>
            <h3>My posts</h3>

            <form action='#' className= {s.newPost}>
                <textarea placeholder='your news...'  rows="3"></textarea>
            </form>

           <div className= {s.controlls}> <button className= {s.btn} type="submit"> Send </button> </div> 

            <div className="posts">
                <Post />
                <Post />
            </div>
            
        </div>

    )

 }

 export default MyPosts