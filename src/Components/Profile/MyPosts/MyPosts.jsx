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
                <Post img="https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      message='Hey, why nobody love me ?' />

                <Post img='https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                      message=" Hi everyone! It's already my second post! " />

                <Post img="https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      message=" I love chocolate. " />

                <Post img="https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      message=" I am fun of React! " />
            </div>
            
        </div>

    )

 }

 export default MyPosts