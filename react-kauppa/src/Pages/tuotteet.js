import './Appp.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Tuotteet() {
  const [tuotteet, setTuotteet] = useState([]);
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/';
  
  let { tuoteId } = useParams();
  

  useEffect(() => {

    let address = '';
    
    if (tuoteId.searchPhrase === undefined) {
      address = URL + 'products/getproducts.php/' + tuoteId.categoryId;
    } else {
      address = URL + 'products/searchproducts.php/' + tuoteId.searchPhrase;
    }

    

    setTuotteet([]);

    axios.get(URL + "products/gettuotteet.php/" + tuoteId)
      .then((response) => {
        const json = response.data;
        setTuotteet(json);
        console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [tuoteId]);
  
  return (  
    
    <div className='product'>
      
      {tuotteet.map(tuote => (
        <Link key={tuote.tuoteid} to={'/tuote/' + tuote.tuoteid}>
          <div >
            <img src={"http://localhost:3000/"+tuote.kuva}/>
             <h3> {tuote.nimi} </h3>
            <p>{tuote.kuvaus}</p>
            <p className='hinta'>{tuote.hinta},00 €</p>
            <button>Lisää ostoskoriin</button>
          </div>
        </Link>
      ))}
      
    </div>

    
  )
}
