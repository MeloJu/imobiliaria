import { useParams } from "react-router-dom";
import { casas } from "../objects/test";
import { useEffect, useState } from "react";
import "../app.css";
import ImageCarousel from "./ImageCarousel";

export default function ProductDetails() {
  const { id } = useParams();
  const [casaSelecionada, setCasaSelecionada] = useState(null);

  useEffect(() => {
    // Simula carregamento dos dados
    const casa = casas.find((casa) => casa.id === parseInt(id, 10));
    setCasaSelecionada(casa);
  }, [id]);

  if (!casaSelecionada) {
    return <h2>Carregando...</h2>;  // Mensagem temporária para evitar tela branca
  }

  return (
    <div className="product-container">
      <div className="image-section">
        <ImageCarousel images={casaSelecionada.images} />
      </div>
      <div className="details-section">
        <h1>{casaSelecionada.title}</h1>
        <p className="description">{casaSelecionada.text}</p>
        <p className="location">
          {casaSelecionada.bairro}, {casaSelecionada.cidade}
        </p>
        <p className="price">{casaSelecionada.preco}</p>
        <button className="contact-button">Chat</button>
      </div>
    </div>
  );
}
