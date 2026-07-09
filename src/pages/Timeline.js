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
        <h1>Timeline - Processo TAD, IPDJ e AG</h1>
      </header>
      <div className="timeline-content">
        <p>Timeline content will go here...</p>
      </div>
    </div>
  );
}

export default Timeline;
