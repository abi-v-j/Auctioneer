import Post from "../post/Post";
import "./posts.scss";

const Posts = ({rows}) => {
  
  return <div className="posts">
    {
      rows.map((post,key) => (
        <Post post={post} key={key} />
      ))
    }
  </div>;
};

export default Posts;