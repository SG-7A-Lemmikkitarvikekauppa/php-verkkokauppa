import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const URL = 'http://localhost/Verkko-kauppaphp/php-kauppa/'

export default function Products({URL}) {
  const [nimi,setNimi] = useState('');
  const [tuoteryhmat, setTuoteryhmat] = useState([]);

  

  let params = useParams();
  
  useEffect(() => {
    let address = '';
    
    if (params.searchPhrase === undefined) {
      address = URL + 'products/gettuotteet.php/' + params.categoryId;
    } else {
      address = URL + 'products/searchproduct.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setNimi(json.category);
          setTuoteryhmat(json.products);
        } else {
          setNimi(params.searchPhrase);
          setTuoteryhmat(json);
        }

      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (  
    <div>
      <h3>Tuotteet: {nimi}</h3>
      {tuoteryhmat.map(tuote => (
        <Link key={tuote.tuoteid} to={'/tuotteet/' + tuote.tuoteid}>
          <div>
            {tuote.nimi}
          </div>
        </Link>
      ))}
    </div>
  )
}
