import './App1.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import pallo from './pallokoira.jpg';
import shampoo from './shampoo.png';
import kissaruoka from './kissaruoka.jpg';
import kissapuu from './kissapuu.jpg';
import valjaat from './koiravaljaat.jpg';
import laser from './kissalaser.jpg';
import luu from './koiraluu.jpg';
import axios from "axios";
import Tuotekortti from '../Components/Tuotekortti';
import tuotekortti1 from '../Components/tuotekortti1';

const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

function Etusivu() {
  const [ruoka, setRuoka] = useState([]);


  useEffect(() => {
    console.log(URL);
  
    axios.get(URL + "products/getruoka.php")
      .then((response) => {
        const json = response.data;
        setRuoka(json);
        console.log(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);

  

    return (
      <div>
        <section>
          <h2>Tervetuloa verkkokauppaan!</h2>
          <p>Tervetuloa tutustumaan laajaan valikoimaamme! Meiltä löydät laadukkaat tuotteet kaiken kokoisille koirille ja kissoille.</p>
        </section>
        <section>
          <h2>Suosituimmat tuotteemme</h2>

          

          <div className="product-grid">
    
     {ruoka.map((tuote) => (
        <Tuotekortti key={tuote.id} tuotelista={tuote} />
      ))}

    {ruoka.map((tuote) => (
      <tuotekortti1 key={tuote.id} tuotelista={tuote} />
    ))}

   



  </div>
  
        </section>
       
      </div>
    );
  }

  export default Etusivu;