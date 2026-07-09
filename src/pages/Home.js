import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>O PROCESSO DA FEDERAÇÃO DE GINÁSTICA DE PORTUGAL</h1>
        <h2>Uma cronologia contada através dos factos</h2>
        <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e a Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p>
        <Link to="/timeline">
          <button className="start-button">Iniciar</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
