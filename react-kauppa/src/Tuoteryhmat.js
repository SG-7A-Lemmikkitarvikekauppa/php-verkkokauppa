import React from "react";
import { Link } from "react-router-dom";

function Tuoteryhmat() {
  return (
    <div>
      <h2>Tuoteryhmät</h2>
      <ul>
        <li>
          <Link to="/kissat">Kissat</Link>
        </li>
        <li>
          <Link to="/koirat">Koirat</Link>
        </li>
      </ul>
    </div>
  );
}
//
export default Tuoteryhmat;

