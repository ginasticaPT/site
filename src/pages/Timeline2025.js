import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [
    {
      date: '6 janeiro 2025',
      title: 'Entrada do processo 1/2025 no TAD',
      fact: 'Impugnação do Ato Eleitoral contra a FGP com base nas enumeras irregularidades praticadas no ato eleitoral de 15/12/2024, 26/12/2024 e 11/01/2025.',
      tone: 'negative',
    },
    {
      date: '11 janeiro 2025',
      title:' Eleições órgãos sociais FGP – 2.ª volta',
      fact: [
        'A convocatória da 2ª volta é divulgada a 27 de dezembro após a divulgação da ata da sessão realizada a 26 de dezembro.',
        'A realização da 2.ª volta ocorreu para além do prazo de oito dias contado da data da 1.ª volta, não cumprindo o prazo legal estipulado, violando o art.º 13º, nº5, do REFGP.',
        'Durante a contagem e validação dos votos por correspondência, contrariando o Estatutos e REFGP, não foi permitida a presença de nenhum representante das Listas concorrentes a este ato. Os votos por correspondência foram abertos e contados sem a presença de representantes da Lista B e unicamente com a presença do Presidente da MAG (candidato da Lista A, logo com interesse direto nos resultados eleitorais, sem isenção, e qual tinha decidido a ressuscitação de votos nulos), contrariando os princípios da transparência eleitoral.',
        'Considerando os resultados apurados em 15 de dezembro e a reapreciação dos votos nulos efetuada em 26 de dezembro, a convocatória para a 2.ª volta abrangeu apenas a eleição dos órgãos Conselho Fiscal e Conselho de Ajuizamento.',
      ],
      tone: 'positive',
      rules: [
        'Art.º 13.º, n.º 5 do REFGP.',
        'Art.º 27.º, n.º 5 do REFGP.',
        'Art.º 30.º do REFGP.',
        'Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
      ],
      documents: [
        {
          label: 'Convocatória 2ª volta das Eleições para os Órgãos Sociais da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - CC0167 - Convocatória 2ª volta das Eleições para os Órgãos Sociais da FGP.pdf`
        },
        {
          label: 'Ata da Assembleia Geral Eleitoral 11jan (não divulgada)',
          source: 'FGP',
          //url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata AG Eleitoral_ 26 dezembro.pdf`
        }
      ]
    },
    {
      date: '20 julho 2025',
      title: 'Eleições intercalares – Conselho de Disciplina',
      fact: [
        'O Conselho de Disciplina foi eleito a 15/12/2024, pelo método de Hondt, com dois membros da Lista B e um membro da Lista A.',
        'Estas eleições intercalares de 20/07/2025 ocorrem porque:',
        {
          type: 'bullets',
          items: [
            '- O membro da Lista A renunciou ao cargo mal tomou posse',
            '- Os dois suplentes da mesma lista recusaram igualmente a assunção das funções para as quais foram candidatos.'
          ]
        },
        'Em consequência, Conselho Disciplina ficou sem possibilidade de funcionar legalmente.',
        'Novamente, neste ato eleitoral a abertura dos votos por correspondência foi efetuada sem a presença de representantes de todas as listas, reincidindo na prática irregular verificada a 11/01/2025,   contrariando os princípios da transparência eleitoral.'
      ],
      important: [
        'Nestas eleições não foi apresentada pela MAG nem pela Comissão Eleitoral qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis. As faltas que acusam aos 5 delegados são anteriores a esta data. Os 5 delegados participaram e votaram.',
      ],
      tone: 'alert',
      rules: [
        'Art.º 27.º, n.º 5 do REFGP.',
        'Art.º 30.º do REFGP.'
      ],
      documents: [
        {
          label: 'Comunicado FGP - Conselho de Disciplina',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Comunicado - situação Conselho Disciplina - 18Jun25.pdf`
        },
        {
          label: 'Convocatória Eleições intercalares – Conselho de Disciplina',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC108 - Convocatória AG Eleitoral - Conselho Disciplina.pdf`
        },
        {
          label: 'Ata da AG Eleitoral intercalar',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Ata AG Eleitoral Intercalar - Conselho Disciplina - 20Jul25_signed_signed.pdf`
        }
      ],
    },
    {
      date: '3 novembro 2025',
      title: 'TAD anula atos eleitorais de dezembro de 2024',
      fact: [
        'O Tribunal Arbitral do Desporto decidiu pela anulação das eleições dos órgãos sociais da FGP de 15/12/2024, bem como os atos eleitorais subsequentes (26/12/2024 e 11/01/2025), por violação de normas imperativas do REFGP e dos princípios da democraticidade e da transparência (art. 5.º n.º 1 do Decreto-Lei 248-B/2008).',
        'Foi ordenada a convocação de AGE e a realização de ato eleitoral para os órgãos sociais no prazo de 15 dias.',
      ],
      important: [
        'A decisão do TAD é de execução obrigatória. O recurso só tem carácter devolutivo e logo não suspende a obrigação de sua execução.',
      ],
      tone: 'positive',
      rules: [
        'Normas imperativas do REFGP e dos princípios da democraticidade e da transparência (art. 5.º n.º 1 do Decreto-Lei 248-B/2008.'
      ],
      documents: [
        {
          label: 'Acórdão TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Acórdão 1_2025 VF_03_11_2025.pdf`
        }
      ]
    },
    // {
    //   date: '4 novembro 2025',
    //   title: 'FGP Solicita ao TAD que a decisão arbitral de 3 de novembro não seja tomada pública',
    //   tone: 'positive',
    //   documents: [
    //     {
    //       label: 'Requerimento à oposição de publicação da decisão do TAD',
    //       source: 'TAD',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Requerimento Oposição à Publicidade_04_11_2025.pdf`
    //     }
    //   ]
    // },
    {
      date: '5 novembro 2025',
      title: 'TAD indefere o pedido da FGP de 4 de novembro',
      fact: [
        'O TAD recusa/indefere o pedido da FGP de não publicação da decisão.',
        'O TAD considera inconstitucional a norma invocada pela FGP e reafirmou o princípio da publicidade e transparência das decisões judiciais.',
      ],
      tone: 'positive',
      documents: [
        {
          label: 'Requerimento da FGP à oposição de publicação da decisão do TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Requerimento Oposição à Publicidade_04_11_2025.pdf`
        },
        {
          label: 'Esclarecimento do TAD sobre a decisão de publicação',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Despacho n.º 8_05_11_2025.pdf`
        }
      ]
    },
    {
      date: '6 novembro 2025',
      title: 'Carta da Direção FGP - recurso no TCAS',
      fact: [
        'Comunicado da FGP refere:',
        {
          type: 'bullets',
          items: [
            '- Segundo o advogado da FGP, a decisão do TAD referida não é definitiva, nem produz efeitos executórios, pelo que não existe qualquer obrigação de realizar novas eleições.',
            '- A FGP informa ter submetido um recurso no Tribunal Central Administrativo Sul.'
          ]
        },
      ],
      tone: 'alert',
      important: [
        'Importa esclarecer que afinal o recurso que a FGP diz ter submetido no TCAS nesta data foi apenas submetido a 24 e novembro (18 dias depois).',
        'A decisão do TAD é de execução obrigatória. O recurso só tem carácter devolutivo e logo não suspende a obrigação de sua execução.',
      ],
      documents: [
        {
          label: 'Carta Direção FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Carta da Direção FGP - 6Nov25.pdf`
        }
      ]
    },
    {
      date: '10 a 15 novembro 2025',
      title: 'Delegados solicitam AG Extraordinária para marcação de eleições',
      fact: [
        '11 delegados, que representam 23% da AG, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária para definir a marcação da data, hora e local das eleições, em obediência ao disposto nos Estatutos e no REFPG.',
        'Esta solicitação não obteve nenhuma resposta nem a AG foi marcada.',
      ],
      tone: 'negative',
      important: [
        'Esta AG nunca chegou a ser convocada pela MAG.',
      ],
    },
    // {
    //   date: '11 novembro 2025',
    //   title: 'Comunicado Direção FGP',
    //   fact: 'A Direção da FGP informou a Mesa da Assembleia Geral para dar início ao processo eleitoral',
    //   tone: 'alert',
    //   documents: [
    //     {
    //       label: 'Comunicado Direção FGP',
    //       source: 'FGP',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Comunicado Direção FGP - 11Nov25.pdf`
    //     }
    //   ]
    //},
    {
      date: '18 novembro 2025',
      title: 'Anúncio Ato Eleitoral',
      fact:'No seguimento da Decisão do Tribunal Arbitral do Desporto (TAD) datada de 3 de novembro de 2025, a MAG convoca eleições para os órgãos Sociais e, igualmente, para os delegados à assembleia geral para os meses de 7 fevereiro e 29 março de 2026 (cerca de 5 meses após a decisão).',
      tone: 'alert',
      documents: [
        {
          label: 'Anúncio ato eleitoral',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC 0154 - Anúncio de Ato Eleitoral.pdf`
        }
      ]
    },
    {
      date: '19 novembro 2025',
      title: 'Presidente da MAG solicita ao TAD esclarecimento sobre a marcação de Eleições',
      fact: [
        'Presidente da MAG solicita ao TAD para “esclarecer se a determinação de proceder à marcação de eleições abrange igualmente a eleição dos Delegados à Assembleia Geral, ou se se limita aos demais órgãos federativos”.',
      ],
      tone: 'alert',
      documents: [
        {
          label: 'Pedido de esclarecimento da FGP no TAD',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Comunicado de esclarecimento da CC0154.pdf`
        }
      ]
    },
    {
      date: '25 novembro 2025',
      title: 'TAD esclarece que as eleições são para os órgãos sociais e não para delegados',
      fact: [
        'No seguimento da contestação dos delegados ao anúncio eleitorial de 18 de novembro sobre a marcação de eleições para delegados à assembleia geral, foi apresentado ao TAD um pedido de esclarecimento sobre se a decisão de 3 de novembro — que determinou a repetição das eleições — se incluiria também a eleição dos Delegados à Assembleia Geral.',
        'O TAD confirmou, por unanimidade dos árbitros, que a decisão incide apenas sobre as eleições dos órgãos federativos e não abrange a eleição dos Delegados.',
        'O Tribunal refere de forma explícita: “O ato eleitoral para órgãos federativos […] é distinto do ato eleitoral para a eleição de delegados. […] É o ato eleitoral para órgãos federativos que […] se encontra viciado, pelo que é o ato eleitoral para órgãos federativos que deverá ser repetido, com os mesmos delegados já eleitos previamente." ',
      ],
      tone: 'alert',
      documents: [
        {
          label: 'Despacho - Repetição de eleições com os mesmos delegados já eleitos previamente',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Despacho n. 9_25_11_2025.pdf`
        }
      ]
    },
    {
      date: '26 novembro 2025',
      title: 'Anúncio de Ato Eleitoral para os órgãos sociais da FGP (brevemente)',
      fact: 'No seguimento do esclarecimento do TAD, a FGP passou a entender que a repetição eleitoral ordenada pelo TAD se restringia aos "restantes órgãos sociais", excluindo a eleição de delegados à Assembleia Geral.',
      tone: 'alert',
      documents: [
        {
          label: 'Anúncio ato eleitoral (brevemente)',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC 0158 - Anúncio de Ato Eleitoral.pdf`
        }
      ]
    },
    {
      date: '2 dezembro 2025',
      title: 'Delegados solicitam AG Extraordinária',
      fact: [
        '17 delegados, que representam 35% da AG, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária.',
        'MAG mais uma vez não cumpre o pedido de marcação de AG dos Delegados.',
        ],
      tone: 'negative',
      important: [
        'A AG nos parâmetros solicitados nunca chegou a ser convocada pela MAG',
      ],
    },
    {
      date: '8 dezembro 2025',
      title: 'Anúncio de Ato Eleitoral para órgãos sociais da FGP',
      fact: [
        'A FGP marca novo ato eleitoral para 28 de fevereiro, 4 meses após a decisão do TAD.',
      ],
      tone: 'positive',
      documents: [
        {
          label: 'Anúncio de Ato Eleitoral para órgãos sociais da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC 0160 - AnÚncio de Ato Eleitoral.pdf`
        }
      ]
    },
    {
      date: '12 dezembro 2025',
      title: 'Convocatória Eleições Órgãos Sociais FGP',
      fact: 'Ato eleitoral confirmado para 28 de fevereiro, com uma comissão eleitoral presidida por Inês Nabais, que posteriormente integrou uma das listas candidatas, em desconformidade com o disposto no artigo 38.º, n.º 3, do Regulamento Eleitoral.',
      tone: 'positive',
      rules: [
        'Art.º 38.º, n.º 3 do REFGP',
      ],
      documents: [
        {
          label: 'Anúncio de Ato Eleitoral para órgãos sociais da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC0161 - Convocatória Eleições Órgãos Sociais FGP.pdf`
        }
      ]
    },
    {
      date: '13 dezembro 2025',
      title: 'Convocatória de Assembleia Geral Ordinária',
      fact: [
        'Nesta cronologia, para esta convocatória, importa salientar que não foi apresentada pela MAG qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis.',
        'Nesta sessão o então Presidente da MAG, Dr. Carlos Morais, anunciou a sua renúncia ao cargo após a derrota em tribunal.',
      ],
      tone: 'positive',
      important: [
        'Nesta AG não foi apresentada pela MAG nem pela Comissão Eleitoral qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis. As faltas que acusam aos 5 delegados são anteriores a esta data. Os 5 delegados visados em 2026 participaram e votaram.',
      ],
      documents: [
        {
          label: 'Convocatória de Assembleia Geral Ordinária',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC0159 Convocatória AG Ordinária - Plano Atividades Orçamento 2026.pdf`
        }
      ]
    },
    // {
    //   date: '2025',
    //   title: 'Atas de 2025',
    //   fact: 'As atas 182_29mar_25, 183_10_abr25, 184_abr25, 185_13dez foram apenas divulgadas a 18 de março de 2026 e aprovadas a 23 de março de 2026. Contudo, até à presente data, nenhuma das atas aprovadas foi divulgada ou publicada após a respetiva aprovação.',
    //   tone: 'negative',
    // },
  ];

  return (
    <div className="timeline-container">
      <header className="timeline-header">
        <Link to="/overview">
          <button className="back-button">← Voltar</button>
        </Link>
        <h1>Cronologia dos Acontecimentos 2025</h1>
        {/* <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e a Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p> */}
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