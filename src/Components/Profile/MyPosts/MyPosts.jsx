import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

// import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer'  // Импортируем эти функции потому что это не бизнес логика, а своего рода утилиты


const MyPosts = (props) => {

    let postsElements = props.postsData.map(item => <Post img={item.img} message={item.message} />)
    // profilePage который находится в Profile.jsx

    // Получение данных из textarea 1 способ
    let textareaAnchor = React.createRef()
    
    let onAddPostCaller = () => {
       props.onAddPost()
    }

    let onPostChangeCaller = () => {
        const value = textareaAnchor.current.value
        props.onPostChange(value)
        
    }

    return (

        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}> 
                <textarea ref={textareaAnchor} placeholder='your news...' rows="3" value={props.newPostText} onChange={onPostChangeCaller}></textarea>

                <div className={s.controlls}> <button onClick={onAddPostCaller} className={s.btn} type="submit"> Send </button> </div>
            </div>


            <div className="posts">

                {postsElements}

            </div>

        </div>

    )

}

export default MyPosts