import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Products({url}) {
  const [nimi,setNimi] = useState('');
  const [tuoteryhmat, setTuoteryhmat] = useState([]);

  

  let params = useParams();
  
  useEffect(() => {
    let address = '';
    
    if (params.searchPhrase === undefined) {
      address = url + 'products/gettuotteet.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproduct.php/' + params.searchPhrase;
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
      <h3>Products for {nimi}</h3>
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
