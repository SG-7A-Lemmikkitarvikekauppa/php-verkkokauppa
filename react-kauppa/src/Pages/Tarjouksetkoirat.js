import './Kampanjat.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './korianruoka.png';
// import pallo from '../images/pallokoira.jpg';
// import valjaat from './koiravaljaat.jpg';
// import luu from '../images/koiraluu.jpg';

 function Tarjouksetkoirat() {
  return (
    <div id='tarjoukset'>
     <section>
          <h2>Tervetuloa verkkokauppaan!</h2>
          <p>Tervetuloa tutustumaan laajaan valikoimaamme! Meiltä löydät laadukkaat tuotteet kaiken kokoisille koirille ja kissoille.</p>
        </section>
        <section>
          <h2>Suosituimmat tuotteemme</h2>
          <div className="product-grid">
  
    <div className="product-item">
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Pentupallo</h3>
      <p>Pentupallo - Kelluva pallo koiran polskutteluleikkeihin. Pehmeää TPR-kumia.</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
   
    

    <div className="product-item">
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Koiran valjaat</h3>
      <p>Basic Dog - Valjaat pieni kokoisille koirille ja koiranpennuille.  </p>
      <p className='hinta'>Nyt vain 9,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className='product-item'>
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge50">-50%</span>
      <h3>Koiran kuivaruoka 3KG</h3>
      <p>HAU HAU - Koiran kuivaruoka pennulle 3 KG</p>
      <p className='hinta'>Nyt vain 5,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    <div className="product-item">
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Puruluu</h3>
      <p> HAU & NAM - Puruluu on isoille koirille. Valmistettu laadukkaasta, yhtenäisestä naudannahasta käsin rullaamalla ja koneella puristamalla</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    
  </div>
  
        </section>
    </div>
  )
}

export default Tarjouksetkoirat;