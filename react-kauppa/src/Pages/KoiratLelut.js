import './App1.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

function KoiratLelut() {
  const [koiralelu, setKoiralelu] = useState([]);



  useEffect(() => {
    console.log(URL);

    axios.get(URL + "products/getkoiralelu.php")
      .then((response) => {
        const json = response.data;
        setKoiralelu(json);
        console.log(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);




    return (
      <div>
        <section>
          <h2>Täältä löydät koirien lelut</h2>

        </section>
        <section>

          <div className="product-grid">

     {koiralelu.map((tuote) => (
        <Koiralelu key={tuote.id} tuotelista={tuote} />
      ))}
          </div>



        </section>

      </div>
    );
  }

  export default KoiratLelut;