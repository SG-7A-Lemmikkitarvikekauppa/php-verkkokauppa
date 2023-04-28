import './App1.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import Tuotekortti from '../Components/Tuotekortti';
import Tuotelista from '../Components/Tuotelista';

const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

function Etusivu() {
  const [ruoka, setRuoka] = useState([]);
  const [lelu, setLelu] = useState([]);


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


  useEffect(() => {
    console.log(URL);

    axios.get(URL + "products/getlelut.php")
      .then((response) => {
        const json = response.data;
        setLelu(json);
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
          <h2>Suosituimmat Ruoat</h2>



          <div className="product-grid">

     {ruoka.map((tuote) => (
        <Tuotekortti key={tuote.id} tuotelista={tuote} />
      ))}
          </div>
      <div>
        <h2 className="hoo2">

          
          Suosituimmat lelut
        </h2>
      </div>
      <div className="product-grid">
        {lelu.map((tuote) => (
        <Tuotelista key={tuote.id} tuotelista={tuote} />
      ))}
      </div>




        </section>

      </div>
    );
  }

  export default Etusivu;