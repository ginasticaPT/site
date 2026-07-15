import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [
    {
      date: '4 junho 2024',
      title: 'Alterações estatutárias',
      fact: [
        'Nesta data a Assembleia Geral aprova a alteração estatutária que introduz a perda de mandato de delegado por faltas (art. 32.º, n.º 1, al. d), dos Estatutos). A alteração é publicada no Portal da Justiça a 26 de setembro de 2024, tornando-se plenamente eficaz a partir dessa data.',
        'A Direção, a quem compete a elaboração dos regulamentos (art. 51.º, n.º 2, al. a), dos Estatutos), não elaborou o regulamento que concretizaria os prazos, procedimentos e critérios de justificação de faltas.',
      ],
      tone: 'positive',
    },
    {
      date: '15 novembro 2024',
      title: 'Eleições Delegados à AG',
      fact: 'Nesta data são divulgados os resultados definitivos das eleições dos delegados à Assembleia Geral, que constituem o colégio eleitoral para o quadriénio 2025-2028.',
      tone: 'positive',
      documents: [
        {
          label: 'Resultados definitivos - Eleições Delegados à AG da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Eleições Delegados AG da FGP  Resultados definitivos.pdf`
        }
      ]
    },
    {
      date: '24 novembro 2024',
      title: 'AGs 180 e 181',
      fact: [
          'Nesta data realizam-se a AG Ordinária n.º 180 e a AG Extraordinária n.º 181. Em ambas se registam faltas de delegados. Nenhuma delas viria a ser contabilizada pela MAG, em 2026, para efeitos de perda de mandato.',
          'A AG 181 tinha como ponto único a Apreciação, discussão e votação de alterações dos Estatutos, de acordo com as exigências do IPDJ, para efeitos de conformidade com o Regime Jurídico das Federações Desportivas.',
          'A ata 180 está publicada no site, mas não foi aprovada em AG nem tem folha de presenças',
          'A ata 181 não está publicada no site, nem foi aprovada em AG, nem tem folha de presenças',
          'Apesar de a norma estatutária, sobre faltas, já vigorar desde setembro, não é comunicada aos delegados qualquer perda de mandato por faltas no decorrer deste ano, nem é publicado qualquer registo de presenças que as pudessem sustentar.',
      ],
      tone: 'alert',
      important: [
        'Importa salientar que na AG 181 existia uma proposta ao art.47º dos estatutos por parte da Direção da FGP, que segundo a mesma tem por base imposições do IPDJ.',
        'O artigo 47º ditava que: "3.A Assembleia Geral reúne extraordinariamente, por iniciativa do Presidente da Mesa, do Presidente da FGP, do Conselho Fiscal ou de, pelo menos, 20% (vinte por cento) dos delegados que compõem a Assembleia Geral."',
        'A alteração ao artigo 47º transcrita dizia que: 3.A Assembleia Geral reúne extraordinariamente, por iniciativa do Presidente da FGP, que deve solicitar ao Presidente da Mesa da Assembleia Geral a respectiva reunião.',
        <p><strong>A Assembleia reprovou esta alteração, que contraria o código civil e os direitos de uma AG</strong>, e foi solicitado a documentação da exigência do IPDJ que nunca foi enviada aos delegados.</p>,
      ],
      documents: [
        {
          label: 'Ata da AG Ordinária n.º 180',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata 180-AGO-24nov24.pdf`
        },
        {
          label: 'Ata da AG Extraordinária n.º 181',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata 181-AGE-24nov24-PorPublicar.pdf`
        },
        {
          label: 'Alterações aos Estatutos da FGP - pormenor das imposições IPDJ',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Alterações aos Estatutos da FGP - pormenor das imposições IPDJ.pdf`
        }
      ]
    },
  ];

  return (
    <div className="timeline-container">
      <header className="timeline-header">
        <Link to="/overview">
          <button className="back-button">← Voltar</button>
        </Link>
        <h1>Acontecimentos adicionais de 2024</h1>
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