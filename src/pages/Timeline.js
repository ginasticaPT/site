import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <header className="timeline-header">
        <Link to="/">
          <button className="back-button">← Voltar</button>
        </Link>
        <h1>Transparência e Memória: Cronologia dos Acontecimentos na FGP</h1>
        <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e a Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p>
      </header>
      <div className="timeline-content">
        <p>Timeline content will go here...</p>
      </div>
    </div>
  );
}

export default Timeline;
