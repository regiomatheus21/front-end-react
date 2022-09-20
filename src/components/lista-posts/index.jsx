import "./styles.css";
import Post from "../../components/posts";
//componente PostList ele espera uma lista de posts
export default function PostList({ posts }) {
  return (
    <div className="post-lista-conteiner">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
