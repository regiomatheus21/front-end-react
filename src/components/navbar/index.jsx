import { Title } from "./style";
import "./style.css";

export default function navbar() {
  return (
    <nav className="navbar">
      <div>
        <a class="logo " href="/">
          <Title>Meu blog</Title>
        </a>
      </div>
      <div>
        <a href="/">Home</a>
        <a href="/Post">Post</a>
        <a href="/contact">Contato</a>
        <a href="/Culture">Cultura</a>
      </div>
    </nav>
  );
}
