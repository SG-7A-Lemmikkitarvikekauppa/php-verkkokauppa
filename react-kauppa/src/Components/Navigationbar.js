import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import KissatHoito from '../Pages/kissatHoito';


export default function NavigationBar() {
  const [tuoteryhmat, setTuoteryhmat] = useState([]);
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

  useEffect(() => {
    console.log(URL);

    axios
      .get(URL + 'products/gettuoteryhmat.php')
      .then((response) => {
        const json = response.data;
        setTuoteryhmat(json);
        console.log(json);
      })
      .catch((error) => {
        alert(error.response?.data?.error || error);
      });
  }, [URL]);

  return (
    <div id="etusivu">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Purrfects Pets
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">


            <li className="nav-item">
                  <Link to="/etusivu" className="nav-link">Etusivu</Link>
                </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Kissat
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdown01"
                >
                  {tuoteryhmat.map((tuoteryhma) => (
                    <li key={tuoteryhma.id} kategoria={tuoteryhma}>
                      <Link
                        className="dropdown-item"
                        to={tuoteryhma.nimi}
                      >
                       <p> {tuoteryhma.nimi} </p>

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Koirat
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdown01"
                >
                  {tuoteryhmat.map((tuoteryhma) => (
                    <li key={tuoteryhma.id} kategoria={tuoteryhma}>
                      <Link
                        className="dropdown-item"
                        to='./products/'
                      >
                       <p> {tuoteryhma.nimi} </p>

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


              <li className="nav-item">
              <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Tarjoukset
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/Tarjouksetkaikki'> Kaikki tarjoukset </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Tarjouksetkissat'>  Kissoille </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Tarjouksetkoirat'>  Koirille</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Tarjouksetjasen'>  Jäsenille </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Poistonurkka'>  Poistonurkka </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>



              <li className="nav-item">
                  <Link className='nav-link' to="/yhteystiedot" >Yhteystiedot</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/ostoskori" >Ostoskori</Link>
                </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
