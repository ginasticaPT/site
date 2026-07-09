import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FEDERAÇÃO DE GINÁSTICA DE PORTUGAL</h1>
        <h2>Uma história contada através dos factos</h2>
        <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e os acontecimentos da Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <Link to="/timeline">
          <button className="start-button">Iniciar</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
