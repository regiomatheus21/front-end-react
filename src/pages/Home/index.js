import Navbar from "../../components/navbar";

import PosteDestaque from "../../components/poste-destaque";
import PostList from "../../components/lista-posts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PosteDestaque />
      <PostList />
    </div>
  );
}
