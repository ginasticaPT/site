import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [

  ];

  return (
    <div className="timeline-container">
      <header className="timeline-header">
        <Link to="/overview">
          <button className="back-button">← Voltar</button>
        </Link>
        <h1>Acontecimentos adicionais de 2025</h1>
        <p>Estes acontecimentos são secundários ao processo mas refletem práticas duvidosas da MAG e FGP ou esclarecimentos a decisões e momentos que moldaram o processo.</p>
        {/* <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p> */}
      </header>
      <div className="timeline-content">
        <div className="vertical-timeline" aria-label="Cronologia vertical de eventos">
          {events.map((event, index) => (
            <article
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={`${event.date}-${event.title}`}
            >
              <span className={`timeline-dot ${event.tone}`} aria-hidden="true" />
              <div className={`timeline-card ${event.tone}`}>
                <p className="timeline-date">{event.date}</p>
                <h3>{event.title}</h3>
                {Array.isArray(event.fact)
                  ? event.fact.map((entry, factIndex) => {
                      if (typeof entry === 'string') {
                        return <p key={`${event.title}-fact-${factIndex}`}>{entry}</p>;
                      }
                      
                      if (entry?.type === 'bullets' && Array.isArray(entry.items)) {
                        return (
                          <ul className="timeline-fact-bullets" key={`${event.title}-fact-bullets-${factIndex}`}>
                            {entry.items.map((item, itemIndex) => (
                              <li key={`${event.title}-fact-bullet-${factIndex}-${itemIndex}`}>
                                {item.replace(/^\s*-\s*/, '')}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (React.isValidElement(entry)) {
                        return <p key={`${event.title}-fact-${factIndex}`}>{entry}</p>;
                      }

                      return null;
                    })
                  : <p>{event.fact}</p>}
                {event.image && (
                  <figure className="timeline-image-wrapper">
                    <img
                      className="timeline-image"
                      src={getImageUrl(event.image)}
                      alt={`Imagem de suporte: ${event.title}`}
                      loading="lazy"
                    />
                    {event.imageCaption && (
                      <figcaption className="timeline-image-caption">{event.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
                {event.important && (
                  <section className="timeline-important" aria-label={`Importante para ${event.title}`}>
                    <h4>Importante</h4>
                    {Array.isArray(event.important) ? (
                      <ul>
                        {event.important.map((item, importantIndex) => (
                          <li key={`${event.title}-important-${importantIndex}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{event.important}</p>
                    )}
                  </section>
                )}
                {event.rules?.length > 0 && (
                  <section className="timeline-rules" aria-label={`Regras aplicáveis para ${event.title}`}>
                    <h4>Normas violadas:</h4>
                    <ul>
                      {event.rules.map((rule, ruleIndex) => (
                        <li key={`${event.title}-rule-${ruleIndex}`}>{rule}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {event.documents?.length > 0 && (
                  <section className="timeline-documents" aria-label={`Documentos de suporte para ${event.title}`}>
                    <h4>Documentos de suporte</h4>
                    <ul>
                      {event.documents.map((document) => (
                        <li key={`${event.title}-${document.label}`}>
                          <a href={document.url} target="_blank" rel="noreferrer">
                            {document.label}
                          </a>
                          <span className="timeline-doc-source">{document.source}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;