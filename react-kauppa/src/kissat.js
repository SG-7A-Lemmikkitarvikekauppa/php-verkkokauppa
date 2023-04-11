import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import KissatRuoka from './KissatRuoka';
import KissatLelut from './KissatLelut';

function Kissat() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Kissat
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/KissatRuoka">Ruoka</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Kissatlelut">Lelut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Kissat />} />
        <Route path="/KissatRuoka" element={<KissatRuoka />} />
        <Route path="/KissatLelut" element={<KissatLelut />} />
        <Route path="/KissatHoito" element={<kissatHoito />} />

      </Routes>
    </Router>
  );
}

export default App;

