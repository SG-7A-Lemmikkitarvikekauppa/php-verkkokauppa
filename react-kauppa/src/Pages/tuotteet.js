import './Appp.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import tuote from './tuote';

export default function Tuotteet() {
  const [nimi, setNimi] = useState ('');
  const [tuotteet, setTuotteet] = useState([]);
  
  
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'
  
  let { tuoteId } = useParams();
  
  // const searchPhrase = useState([]);
  
  useEffect(() => {

    let address = '';
    
    // if (tuoteId.searchPhrase === undefined) {
    //   address = URL + 'products/gettuotteet.php/' + tuoteId;
    //   console.log(address)
    //   console.log(tuoteId)
    // } else {
    //   address = URL + 'products/searchproducts.php/' + tuoteId.searchPhrase;
    // }

    

    // setTuotteet([]);

    if (tuoteId.searchPhrase === undefined) {
      address = URL + 'products/gettuotteet.php/' + tuoteId;
    } else {
      address = URL + 'products/searchproduct.php/' + tuoteId.searchPhrase;
    }
    console.log(address)

    axios.get(address)
    .then((response) => {
      const json = response.data;
      if (tuoteId.searchPhrase === undefined) {
        // setNimi(json.category);
        console.log(json.category)
        setTuotteet(json);
        console.log(json.products)
        console.log(json)
      } else {
        setNimi(tuoteId.searchPhrase);
        setTuotteet(json);
        console.log(json);}
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [tuoteId]);
  
  return (  
    
    <div>
      
      <h3>Products for {nimi}</h3>
      {tuotteet.map(tuote => (
        <Link key={tuote.tuotenro} to={'/tuote/' + tuote.tuotenro}>
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
