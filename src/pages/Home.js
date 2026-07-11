import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eleições Órgãos Sociais FGP 2025–2028:</h1>
        <h1>Os acontecimentos que conduziu ao processo no TAD e no IPDJ</h1>
        <h2>Uma cronologia contada através dos factos</h2>
        <Link to="/overview">
          <button className="start-button">Iniciar</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
