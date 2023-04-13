import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Kissanlelut() {
  // Luodaan tilamuuttuja, johon tallennetaan valittu kategoria
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Funktio, joka asettaa valitun kategorian tilamuuttujaan
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // Kategoriat taulukkona
  const categories = [
    'Laserlelu',
    'Pallo',
    'Kissanminttulelu',
    'Huiska',
    'Leluhiiri'
  ];

  return (
    <Container>
      <h1>Kissanlelut</h1>

      {/* Kategoriat */}
      <Row>
        {categories.map((category, index) => (
          <Col key={index}>
            <Button onClick={() => handleCategorySelect(category)}>
              {category}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Näkymä valitulle kategorialle */}
      {selectedCategory && (
        <div>
          <h2>{selectedCategory}</h2>
          {/* Tähän voisi lisätä tarkemman kuvauksen tuotteesta */}
          <Link to="/">Takaisin</Link>
        </div>
      )}
    </Container>
  );
}

export default Kissanlelut;
