import { useParams } from "react-router-dom";
import { casas } from "../objects/test";
import '../app.css'
export default function ProductDetails() {
  const { id } = useParams();
  const casaSelecionada = casas.find((casa) => casa.id === parseInt(id, 10));

  if (!casaSelecionada) {
    return <h2>Casa não encontrada!</h2>;
  }

  return (
    <div className="product-container">
      <div className="image-section">
        <img src={casaSelecionada.src} alt={casaSelecionada.title} />
      </div>
      <div className="details-section">
        <h1>{casaSelecionada.title}</h1>
        <p className="description">{casaSelecionada.text}</p>
        <p className="location">{casaSelecionada.bairro}, {casaSelecionada.cidade}</p>
        <p className="price">{casaSelecionada.preco}</p>
        <button className="contact-button">Chat</button>
      </div>
    </div>
  );
}