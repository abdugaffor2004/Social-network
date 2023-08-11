import { memo } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostForm from "./Form/NewPostForm";

// import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer'  // Импортируем эти функции потому что это не бизнес логика, а своего рода утилиты


const MyPosts = (props) => {

  let postsElements = props.postsData.map((item) => (
    <Post key={item.id} img={item.img} message={item.message} />
  ));
  // profilePage который находится в Profile.jsx

  // Получение данных из textarea 1 способ
  // let textareaAnchor = React.createRef()

  let addNewPost = (formData) => {
    props.onAddPost(formData.postText);
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>

      <div className={s.newPost}>
        <NewPostForm onSubmit={addNewPost} />
      </div>

      <div className="posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
