import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import kuva from './koiraruoka.png';

function Etusivu() {
    return (
      <div>
        <section>
          <h2>Tervetuloa verkkokauppaan!</h2>
          <p>Tervetuloa tutustumaan laajaan valikoimaamme! Meiltä löydät laadukkaat tuotteet koirille, kissoille ja muille lemmikeille.</p>
        </section>
        <section>
          <h2>Suosituimmat tuotteemme</h2>
          <div className="product-grid">
    <div className="product-item">
      <img src= {'koiraruoka.png'} alt="tuotteen kuva" />
      <h3>Tuote 1</h3>
      <p>Kuvaus tuotteesta 1.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1016/400/300" alt="tuotteen kuva" />
      <h3>Tuote 2</h3>
      <p>Kuvaus tuotteesta 2.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1015/400/300" alt="tuotteen kuva" />
      <h3>Tuote 3</h3>
      <p>Kuvaus tuotteesta 3.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1015/400/300" alt="tuotteen kuva" />
      <h3>Tuote 4</h3>
      <p>Kuvaus tuotteesta 4.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className="product-item">
      <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
      <h3>Tuote 5</h3>
      <p>Kuvaus tuotteesta 5.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1023/400/300" alt="tuotteen kuva" />
      <h3>Tuote 6</h3>
      <p>Kuvaus tuotteesta 6.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
      <h3>Tuote 7</h3>
      <p>Kuvaus tuotteesta 7.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
      <h3>Tuote 8</h3>
      <p>Kuvaus tuotteesta 8.</p>
      <button>Lisää ostoskoriin</button>
    </div>
  </div>
  
        </section>
       
      </div>
    );
  }

  export default Etusivu;