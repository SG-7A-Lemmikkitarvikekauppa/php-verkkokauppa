import './Appp.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Tuotteetkoirat() {
  const [tuotteetkoirat, setTuotteetkoirat] = useState([]);
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/';
  
  let { tuoteId } = useParams();

  useEffect(() => {
    setTuotteetkoirat([]);

    axios.get(URL + "products/gettuotteetkoirat.php/" + tuoteId)
      .then((response) => {
        const json = response.data;
        setTuotteetkoirat(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [tuoteId]);
  
  return (  
   
    <div className='product'>
      
      {tuotteetkoirat.map(tuote => (
        <Link key={tuote.tuoteid} to={'/tuote/' + tuote.tuoteid}>
          <div>
            <img />
             <h3> {tuote.nimi} </h3>
            <p>{tuote.kuvaus}</p>
            <p>{tuote.hinta}</p>
            <button>Lisää ostoskoriin</button>
          </div>
        </Link>
      ))}
    </div>
   

    
  )
}
