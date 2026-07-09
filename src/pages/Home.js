import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FGP 2024–2028: O Processo que Conduziu ao processo no TAD e no IPDJ</h1>
        <h2>Uma cronologia contada através dos factos</h2>
        <Link to="/timeline">
          <button className="start-button">Iniciar</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
