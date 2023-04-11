import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './korianruoka.png';
import pallo from './pallokoira.jpg';
import shampoo from './shampoo.png';
import kissaruoka from './kissaruoka.jpg';
import kissapuu from './kissapuu.jpg';
import valjaat from './koiravaljaat.jpg';
import laser from './kissalaser.jpg';
import luu from './koiraluu.jpg';

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
      <img src= {logo} alt="tuotteen kuva" />
      <h3>Koiran kuivaruoka 5KG</h3>
      <p>Täysipainoinen, runsaasti kanaa sisältävä täysravinto kookkaaksi kasvaville pennuille. Turvaa tasapainoista kasvua ja sisältää mm. kehityksen kannalta tärkeää omega-3-rasvahappoa.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src= {pallo} alt="tuotteen kuva" />
      <h3>pallo</h3>
      <p>Kelluva pallo koiran polskutteluleikkeihin. Pehmeää TPR-kumia.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src={shampoo} alt="tuotteen kuva" />
      <h3>Shampoo</h3>
      <p>Hellävarainen ja kosteuttava shampoo kissalle.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src={kissaruoka} alt="tuotteen kuva" />
      <h3>Kissan kuivaruoka</h3>
      <p>Erityisen maistuva täysravinto sisältää leikatun kissasi hyvinvointia helliviä aineksia, kuten hyvin sulavaa kanaa, vihanneksia, hedelmiä, lohiöljyä ja prebiootteja.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className="product-item">
      <img src={kissapuu} alt="tuotteen kuva" />
      <h3>Raapimapuu</h3>
      <p>Raapimapuussa on runsas valikoima oleskelu- ja vahtimistasoja, kolme kynsiä kutsuvaa tolppaa ja mm. irrotettava tyyny.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src={valjaat} alt="tuotteen kuva" />
      <h3>Koiran valjaat</h3>
      <p>Kestävä treenivaljas on optimaalinen valinta aktiivisille ja voimakkaille koirille. </p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src={laser} alt="tuotteen kuva" />
      <h3>Laserlelu</h3>
      <p>Klassinen laserlelu hauskuuttaa pitkään niin kissaa kuin omistajaakin.</p>
      <button>Lisää ostoskoriin</button>
    </div>
    <div className="product-item">
      <img src={luu} alt="tuotteen kuva" />
      <h3>Puruluu</h3>
      <p>puruluu on valmistettu laadukkaasta, yhtenäisestä naudannahasta käsin rullaamalla ja koneella puristamalla</p>
      <button>Lisää ostoskoriin</button>
    </div>
  </div>
  
        </section>
       
      </div>
    );
  }

  export default Etusivu;