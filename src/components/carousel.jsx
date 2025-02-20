import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselLinks } from '../data'; // Importando o array corrigido

function UncontrolledExample() {
  return (
    <Carousel>
      {carouselLinks.map(carousel => (
        <Carousel.Item key={carousel.id}>
          <img 
            className='d-block w-100'
            src={carousel.src}
            alt={`slide ${carousel.id}`}
          />
          <Carousel.Caption>
            <h3>{carousel.title}</h3>
            <p>{carousel.info}</p>
            <a className='btn btn-primary' href={carousel.pageLinks}>Learn More</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;