import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { casas } from '../objects/test';
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {casas.map((knust) => (
          <Col key={knust.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={knust.images[0]} />
              <Card.Body>
                <Card.Title>{knust.title}</Card.Title>
                <Card.Text>{knust.text}</Card.Text>
                <NavLink to={`./product/${knust.id}`} className="btn btn-primary">
                  Ver Casa
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BasicExample;
