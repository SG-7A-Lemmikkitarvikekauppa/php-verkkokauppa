import './App1.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

function KissatLelut() {
  const [kissalelu, setKissalelu] = useState([]);



  useEffect(() => {
    console.log(URL);

    axios.get(URL + "products/getkissalelu.php")
      .then((response) => {
        const json = response.data;
        setKissalelu(json);
        console.log(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);




    return (
      <div>
        <section>
          <h2>Täältä löydät kissojen lelut</h2>

        </section>
        <section>

          <div className="product-grid">

     {kissalelu.map((tuote) => (
        <Kissalelu key={tuote.id} tuotelista={tuote} />
      ))}
          </div>



        </section>

      </div>
    );
  }

  export default KissatLelut;