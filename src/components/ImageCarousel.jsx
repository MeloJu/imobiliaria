import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app.css"; // Importa os estilos

const ImageCarousel = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1, slider2;

  return (
    <div className="carousel-container">
      {/* Carrossel principal */}
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider1 = slider)}
        className="main-slider"
      >
        {images.map((img, index) => (
          <div key={index} className="main-slide">
            <img src={img} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {/* Miniaturas */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="thumbnail-slider"
      >
        {images.map((img, index) => (
          <div key={index} className="thumbnail">
            <img src={img} alt={`Miniatura ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
