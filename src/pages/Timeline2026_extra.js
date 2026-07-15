import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [
    {
      date: '18 março 2026',
      title: 'Atas e Registo presenças Delegados de 2025 e 2026',
      fact: [
        'Envio tardio e incompleto, nesta data, das atas e registos de presenças dos delegados, viola o dever de publicitação (art.º 14.º dos Estatutos da FGP) e o dever de transparência (art.º 3.º do REFGP):',
        {
          type: 'bullets',
          items: [
            'A ata 181 de Assembleias Geral realizada em 2024 nunca foi divulgada.',
            'A ata 180 da AG de 24 de novembro, está publicada no site da FGP, mas não foi aprovada em AG nem tem folha de presenças dos delegados.',
            'As atas 182_29mar_25, 183_10_abr25, 184_10abr25, 185_13dez25 foram apenas divulgadas a 18 de março de 2026 e aprovadas a 23 de março de 2026. Contudo, até à presente data, nenhuma das atas aprovadas foi divulgada ou publicada após a respetiva aprovação.'
          ]
        },
        'Presenças dos Delegados em AG. O quadro infra demonstra que, em cerca de 50% das Assembleias do ciclo, a informação relativa a faltas está omissa ou incompleta. Esta omissão condiciona e retira toda a potencial fundamentação da base legal pela qual a MAG afastou unilateralmente 5 delegados.',
      ],
      tone: 'negative',
      image: 'registo falta de delegados vs registo ata.png',
      imageCaption: 'Imagem de suporte: Atas e Registo presenças Delegados de 2025 e 2026.Figura — Registo delegados de 9 de março - Vermelho: informação não divulgada; Amarelo: informação incompleta sobre as faltas dos delegados por inerência; Verde: informação completa.',
      important: [
        'Importa, também, referir que os 5 delegados visados apresentaram justificações de faltas, que não foram consideradas pela MAG em comparação com outros delegados.',
      ],
      rules: [
        'Art.º 14 dos Estatutos da FGP',
        'Art.º 3.º do REFGP',
      ],
      documents: [
        {
          label: 'Ata 182 - Assembleia Geral Ordinária - 29Mar25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 182 - Assembleia Geral Ordinária - 29Mar25.pdf`
        },
        {
          label: 'Ata 183 - Assembleia Geral Extraordinária - 10Abr25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 183 - Assembleia Geral Extraordinária - 10Abr25.pdf`
        },
        {
          label: 'Ata 184 - Assembleia Geral Extraordinária - 10Abr25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 184 - Assembleia Geral Extraordinária - 10Abr25.pdf`
        },
        {
          label: 'Ata 185 - Assembleia Geral Extraordinária - 13Dez25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 185 - Assembleia Geral Extraordinária - 13Dez25.pdf`
        },
        {
          label: 'Registo presenças Delegados de 2025 e 2026 v9mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Registo Delegados AG FGP v9Mar26.pdf`
        }
      ]
    },
    {
      date: '20 abril 2026',
      title: 'Resposta MAG - requerimento AGE',
      fact: [
        'No OF190420262217, de 20/04/2026, em resposta ao requerimento de 27 de março a MAG indica que a AGE requerida fica marcada para 01/05/2026 e informa que apenas o ponto 1 do requerimento será considerado.',
        'Informa, também, que a convocatória formal será remetida nos termos e prazos aplicáveis.'
      ],
      rules: [
        'Art.º 47.º n.º 3 dos Estatutos',
      ],
      documents: [
        {
          label: 'Resposta ao requerimento de convocatória de AGE datado de 27/03/2026',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - OF190420262217 - Requerimento Convocatória AGE.pdf`
        }
      ]
    },
    {
      date: '29 abril 2026',
      title: 'Convocatória	| AG Extraordinária 1 Maio 2026',
      fact: [
        'A convocatória foi enviada no dia 29 de abril, pelas 21h45, integrando apenas o ponto 1 do requerimento apresentado por uma percentagem de delegados, excluindo integralmente o ponto 2 e procedendo à alteração do teor do ponto 3.',
        'Adicionalmente, foi introduzido um ponto autónomo relativo à aprovação da ata da última Assembleia Geral.'
      ],
      rules: [
        'Art.º 47.º n.º 3 dos Estatutos',
      ],
      documents: [
        {
          label: 'Convocatória AG Extraordinária 1 Maio 2026',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória Assembleia Geral Extraordinária 1Mai26.pdf`
        }
      ]
    },
    {
      date: '30 abril 2026',
      title: 'Pedido de Remarcação da AG de 1 de maio',
      fact: [
        'Os delegados requerentes solicitaram a remarcação da AG, de forma que seja convocada com o prazo regulamentar e estatutário mínimo aplicável, assim como, pela incongruência da Ordem de Trabalhos constante da convocatória enviada, não corresponde à Ordem de Trabalhos formulada pelos Delegados requerentes no requerimento de 27/03/2026.'
      ],
    },
    {
      date: '30 abril 2026',
      title: 'Remarcação da AG de 1 de maio ',
      fact: [
        'Confirmado pela MAG a remarcação da AG com a mesma ordem de trabalhos.'
      ],
      important: [
        'A MAG não remarcou a AG até à data.',//, com a ordem de trabalhos do requerimento de 27/03/2026, violando o art.º 47.º n.º 3 dos Estatutos da FGP.'
      ],
      documents: [
        {
          label: 'Resposta ao pedido de remarcação da AG de 1 de maio',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - REM300420261543 - Resposta email 30Abr26 AGE.pdf`
        }
      ]
    },
    {
      date: '16 junho 2026',
      title: 'Comunicados FGP e MAG',
      fact: [
        'A 16 de junho, a MAG e a Direção emitem comunicados. A Direção informa ter recorrido do acórdão do TAD — recurso sem efeito suspensivo — e invoca «incerteza jurídica» para justificar a não realização das eleições; a MAG sustenta que não lhe compete reconhecer a deliberação da Assembleia Geral de 23/03/2026.'
      ],
      documents: [
        {
          label: 'Comunicado da Direção da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Comunicado - Direção - 16Jun26.pdf`
        },
        {
          label: 'Comunicado da MAG',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Comunicado - MAG - 16Jun26.pdf`
        }
      ]
    }
  ];

  return (
      <div className="timeline-container">
        <header className="timeline-header">
          <Link to="/overview">
            <button className="back-button">← Voltar</button>
          </Link>
        <h1>Acontecimentos adicionais de 2026</h1>
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