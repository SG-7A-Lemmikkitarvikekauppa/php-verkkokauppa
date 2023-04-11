import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Koirat() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Koirat
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/koiranruoka">Ruoka</Dropdown.Item>
        <Dropdown.Item as={Link} to="/koiranlelut">Lelut</Dropdown.Item>
        <Dropdown.Item as={Link} to="/koiranhoito">Hoito ja 'huolenpito</Dropdown.Item>
        <Dropdown.Item as={Link} to="/ulkoilu">Ulkoilu</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

function KoiratRuoka() {
  return <h1>Koiranruoka</h1>;
}

function KoiratLelut() {
  return <h1>Koiranlelut</h1>;
}

function koiratHoito() {
  return <h1>Koiranhoito</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Koirat} />
        <Route path="/koiranruoka" component={KoiratRuoka} />
        <Route path="/koiranlelut" component={KoiratLelut} />
        <Route path="/koiranhoito" component={koiratHoito} />

      </Routes>
    </Router>
  );
}

export default App;
