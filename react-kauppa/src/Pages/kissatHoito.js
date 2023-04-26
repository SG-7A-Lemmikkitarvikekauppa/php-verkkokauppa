import React, { useEffect, useState } from "react";
import axios from "axios";




 function KissatHoito() {

  const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'
  const [hoito, setHoito] = useState([]);

  useEffect(() => {
    console.log(URL);
  
    axios.get(URL + "products/gethoito.php")
      .then((response) => {
        const json = response.data;
        setHoito(json);
        console.log(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);
  
  
  return (
    <div>
      <p> igurjlbfjaaa </p>
    </div>
  )
}

export default KissatHoito