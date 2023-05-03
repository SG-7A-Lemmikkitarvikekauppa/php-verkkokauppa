import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Tuote() {
  const [tuote, setTuote] = useState([]);
  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/';

  let { tuoteNro } = useParams();

  useEffect(() => {
    axios.get(URL + "products/gettuote.php/" + tuoteNro)
      .then((response) => {
        const json = response.data;
        console.log(json);
        setTuote(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tuoteNro]);

  return (
    <div>
    {tuote ? (
      <>
        <h3>{tuote.nimi}</h3>
        <p>{tuote.hinta}</p>
        <div key={tuote.tuotenro}>
          <button>Lisää ostoskoriin</button>
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  
  );
}
