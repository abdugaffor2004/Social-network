import { connect } from "react-redux";
import {
  addPostActionCreator
} from "../../../Redux/profile-reducer"; // Импортируем эти функции потому что это не бизнес логика, а своего рода утилиты
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let onAddPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (value) =>
//     props.store.dispatch(updateNewPostActionCreator(value));

//   return (
//     <MyPosts
//       onAddPost={onAddPost}
//       onPostChange={onPostChange}
//       newPostText={state.profilePage.newPostText}
//       postsData={state.profilePage.postsData}
//     />
//   );
// };  Здесь я создал контейнерную компоненту в ручную



let mapStateToProps = (stateCopy) => {
  return {
    postsData: stateCopy.profilePage.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {

    onAddPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },

  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
