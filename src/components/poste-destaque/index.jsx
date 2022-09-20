import "./styles.css";
import ImagAutor from "../descricao-autor/index";
export default function destaquePosts() {
  return (
    <div className="conteiner-post-destaque">
      <div>
        <img src="https://www.grupotecnofix.com.br/wp-content/uploads/2020/04/landscape-mountains-sky-4843193.jpg" />
      </div>

      <div>
        <p className="post-destaque-date">July 24, 2022</p>
        <h2 className="post-destaque-date-tittle">
          Lorem ipsum dolor sit amet consectetur{" "}
        </h2>
        <p className="post-destaque-descricao">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur
        </p>
        <ImagAutor />
      </div>
    </div>
  );
}
