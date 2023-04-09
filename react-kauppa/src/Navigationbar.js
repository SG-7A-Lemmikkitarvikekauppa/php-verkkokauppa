import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Etusivu from './Etusivu';
import Tuoteryhmat from './Tuoteryhmat';
import Kampanjat from './Kampanjat';
import Yhteystiedot from './Yhteystiedot';
import Kissat from './kissat';
import Koirat from './koirat';
import Kissanlelut from './KissatRuoka';
import { Dropdown } from 'react-bootstrap';


function NavigationBar() {
  
  return (
    <Router>
      <div id="etusivu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/etusivu" className="nav-link">Etusivu</Link>
                </li>
                
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Kissat
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/KissatLelut">Lelut</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/KissatRuoka">Ruoka</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koirat">Hoito ja huolenpito</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koirat">Muut</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Koirat
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/koiranlelut">Lelut</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koiranruoka">Ruoka</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koirat">Hoito ja huolenpito</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koirat">Ulkoilu</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/koirat">Muut</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                </li>
                <li className="nav-item">
                  <Link to="/kampanjat" className="nav-link">Kampanjat</Link>
                </li>
                <li className="nav-item">
                  <Link to="/yhteystiedot" className="nav-link">Yhteystiedot</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" component={Etusivu} />
            <Route path="/tuoteryhmat" component={Tuoteryhmat} />
            <Route path="/kampanjat" component={Kampanjat} />
            <Route path="/yhteystiedot" component={Yhteystiedot} />
            <Route path="/kissat" component={Kissat} />
            <Route path="/koirat" component={Koirat} />
            <Route path="/KissatLelut" component={Kissanlelut} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default NavigationBar;
