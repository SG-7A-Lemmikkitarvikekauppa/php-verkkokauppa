import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';


export default function NavigationBar() {
  
  return (
  
      <div id="etusivu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Purrfects Pets</a>
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
                     
                            <Dropdown.Item as={Link} to='/KissatLelut'> Lelut </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/KissatRuoka'> Ruoka</Dropdown.Item>
                            <Dropdown.Item as={Link} to='kissatHoito'>Hoito ja huolenpito</Dropdown.Item>
                    </Dropdown.Menu>
                          </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Koirat
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/KoiratLelut'> Lelut </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/KoiratRuoka'>  Ruoka </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/koiratHoito'>  Hoito ja huolenpito</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ulkoilu'>  Ulkoilu </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/kampanjat" >Kampanjat</Link>
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


