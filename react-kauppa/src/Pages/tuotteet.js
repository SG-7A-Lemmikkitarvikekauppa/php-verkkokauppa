import './Appp.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Tuotteet() {
  const [tuotteet, setTuotteet] = useState([]);
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/';
  
  let { tuoteId } = useParams();

  useEffect(() => {
    setTuotteet([]);

    axios.get(URL + "products/gettuotteet.php/" + tuoteId)
      .then((response) => {
        const json = response.data;
        setTuotteet(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [tuoteId]);
  
  return (  
    <div className='product-grid'>
      <h3>Products </h3>
      {tuotteet.map(tuote => (
        <Link key={tuote.tuoteid} to={'/tuote/' + tuote.tuoteid}>
          <div>
            <img />
             <h3> {tuote.nimi} </h3>
            <p>Tässä meidän mahtava tuotteemme</p>
            <p>{tuote.hinta}</p>
            <button>Lisää ostoskoriin</button>
          </div>
        </Link>
      ))}
    </div>

    
  )
}
