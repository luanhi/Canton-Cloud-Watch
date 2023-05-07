import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleAbout(event) {
    alert("Canton Route Ranger is a bus-tracking app for the Canton bus system. It was created by Ashley Bouse, Wesley Liao, Hillary Luan, and Oliver Wu.");
}

function Navbar() {
  return (
    <div class="Navbar-class">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Canton Route Ranger</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={handleAbout}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
