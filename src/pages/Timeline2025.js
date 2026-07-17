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
        'Durante a contagem e validação dos votos por correspondência, não foi permitida a presença de nenhum representante das Listas concorrentes a este ato. Os votos por correspondência foram abertos e contados sem a presença de representantes da Lista B e unicamente com a presença do Presidente da MAG (candidato da Lista A, logo com interesse direto nos resultados eleitorais, sem isenção, e qual tinha decidido a "ressuscitação de votos nulos"), contrariando os princípios da transparência eleitoral.',
        'Considerando os resultados apurados em 15 de dezembro e a reapreciação dos votos nulos efetuada em 26 de dezembro, a convocatória para a 2.ª volta abrangeu apenas a eleição dos órgãos Conselho Fiscal e Conselho de Ajuizamento.',
      ],
      tone: 'positive',
      rules: [
        'Art. 5.º, n.º 1, do Decreto-Lei n.º 248-B/2008 — princípios da democraticidade e da transparência.',
        'Nota interpretativa: Art.º 50º do REFGP - Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
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
        'Novamente, neste ato eleitoral a abertura dos votos por correspondência foi efetuada sem a presença de representantes de todas as listas.'
      ],
      important: [
        'Nestas eleições não foi apresentada pela MAG nem pela Comissão Eleitoral qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis. As faltas que acusam aos 5 delegados são anteriores a esta data. Os 5 delegados participaram e votaram.',
      ],
      tone: 'alert',
      rules: [
        'Art. 5.º, n.º 1, do Decreto-Lei n.º 248-B/2008 — princípios da democraticidade e da transparência.',
        'Nota interpretativa: Art.º 50º do REFGP - Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
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
        <p><strong>O Tribunal Arbitral do Desporto decidiu pela anulação das eleições dos órgãos sociais da FGP</strong> de 15/12/2024, bem como os atos eleitorais subsequentes (26/12/2024 e 11/01/2025), por violação de normas imperativas do REFGP e dos princípios da democraticidade e da transparência (art. 5.º n.º 1 do Decreto-Lei 248-B/2008).</p>,
        <p><strong>Foi ordenada a convocação de AGE e a realização de ato eleitoral para os órgãos sociais no prazo de 15 dias.</strong></p>,
      ],
      important: [
        'A decisão do TAD é de execução obrigatória. O recurso só tem carácter devolutivo e logo não suspende a obrigação de sua execução.',
      ],
      tone: 'positive',
      rules: [
        'Normas imperativas do REFGP e dos princípios da democraticidade e da transparência (art. 5.º n.º 1 do Decreto-Lei 248-B/2008).'
      ],
      documents: [
        {
          label: 'Acórdão TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Acórdão 1_2025 VF_03_11_2025.pdf`
        }
      ]
    },
    {
      date: '5 novembro 2025',
      title: 'TAD indefere o pedido da FGP de 4 de novembro',
      fact: [
        <p><strong>O TAD recusa/indefere o pedido da FGP</strong> de não publicação da decisão.</p>,
        <p><strong>O TAD considera inconstitucional a norma invocada pela FGP</strong> e reafirmou o princípio da publicidade e transparência das decisões judiciais.</p>,
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
    // {
    //   date: '10 a 15 novembro 2025',
    //   title: 'Delegados solicitam AG Extraordinária para marcação de eleições',
    //   fact: [
    //     '11 delegados, que representam 23% da AG, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária para definir a marcação da data, hora e local das eleições, em obediência ao disposto nos Estatutos e no REFPG.',
    //   ],
    //   tone: 'negative',
    //   important: [
    //     'Esta solicitação não obteve nenhuma resposta nem a AG foi marcada.',
    //   ],
    // },
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
      fact: <p>No seguimento da Decisão do TAD datada de 3 de novembro de 2025, a MAG <strong>convoca eleições para os órgãos Sociais</strong> e, igualmente, para os delegados à assembleia geral para 7 fevereiro e 29 março de 2026 respetivamente (cerca de 5 meses após a decisão).</p>,
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
      title: 'Delegados solicitam AG Extraordinária para marcação de eleições',
      fact: [
        'Depois de 11 delegados solicitarem, sem sucesso, a realização por email da Assembleia Geral Extraordinária prevista no acórdão do TAD, o pedido é formalizado a 19 de novembro de 2025, por carta registada com aviso de receção assinada por 17 dos 48 delegados — bem acima dos 20% exigidos pelo art. 47.º, n.º 3, dos Estatutos — para a marcação da data, hora e local das eleições, com o propósito de corrigir os vícios do primeiro processo eleitoral.',
      ],
      tone: 'negative',
      important: [
        'A 5 de dezembro, MAG recusou liminarmente os pedidos dos Delegados violando os direitos dos delegados e da AG.',
        'A AG não foi marcada.',
      ],
      rules: [
        'Art.º 47.º, n.º 3, dos Estatutos da FGP.',
      ]
    },
    {
      date: '19 novembro 2025',
      title: 'Presidente da MAG solicita ao TAD esclarecimento sobre a marcação de Eleições',
      fact: [
        <p>Presidente da MAG solicita ao TAD para <em>"esclarecer se a determinação de proceder à marcação de eleições abrange igualmente a eleição dos Delegados à Assembleia Geral, ou se se limita aos demais órgãos federativos"</em>.</p>,
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
        <p>No seguimento da <strong>contestação dos delegados</strong> ao anúncio eleitorial de 18 de novembro <strong>sobre a marcação de eleições para delegados à assembleia geral</strong>, foi apresentado ao TAD um pedido de esclarecimento sobre se a decisão de 3 de novembro — que determinou a repetição das eleições — se incluiria também a eleição dos Delegados à Assembleia Geral.</p>,
        <p><strong>O TAD confirmou, por unanimidade dos árbitros, que a decisão incide apenas sobre as eleições dos órgãos federativos e não abrange a eleição dos Delegados.</strong></p>,
        <p>O Tribunal refere de forma explícita: <em>“O ato eleitoral para órgãos federativos […] é distinto do ato eleitoral para a eleição de delegados. […] É o ato eleitoral para órgãos federativos que […] se encontra viciado, pelo que é o ato eleitoral para órgãos federativos que deverá ser repetido, com os mesmos delegados já eleitos previamente."</em></p>,
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
      fact: <p>No seguimento do esclarecimento do TAD, <strong>a FGP passou a entender que a repetição eleitoral ordenada pelo TAD se restringia aos "restantes órgãos sociais"</strong>, excluindo a eleição de delegados à Assembleia Geral.</p>,
      tone: 'alert',
      documents: [
        {
          label: 'Anúncio ato eleitoral (brevemente)',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC 0158 - Anúncio de Ato Eleitoral.pdf`
        }
      ]
    },
    // {
    //   date: '2 dezembro 2025',
    //   title: 'Delegados solicitam AG Extraordinária',
    //   fact: [
    //     '17 delegados, que representam 35% da AG, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária.',
    //     'NOTA: A AG nos parâmetros solicitados nunca chegou a ser convocada pela MAG.',
    //     ],
    //   tone: 'negative',
    // },
    {
      date: '8 dezembro 2025',
      title: 'Anúncio de Ato Eleitoral para órgãos sociais da FGP',
      fact: [
        'Neste anúncio é clara a opinião da FGP sobre a não competência do TAD.',
        'Para este novo ato, a FGP já considerará a pausa natalícia e considera "adqueado" a marcação do novo ato eleitoral para 28 de fevereiro, 4 meses após a decisão do TAD.',
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
      fact: 'Ato eleitoral  confirmado para 28 de fevereiro, com uma comissão eleitoral presidida por Inês Nabais, que posteriormente integrou uma das listas candidatas.',
      tone: 'positive',
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
        <p>Nesta cronologia, para esta convocatória, importa salientar que <strong>não foi apresentada pela MAG qualquer relação de delegados que se encontrassem em situação de perda de mandato</strong> ou em desconformidade com as disposições estatutárias aplicáveis.</p>,
        'Nesta sessão o então Presidente da MAG e da Comissão Eleitoral, Dr. Carlos Morais, anunciou a sua renúncia ao cargo.',
      ],
      tone: 'positive',
      documents: [
        {
          label: 'Convocatória de Assembleia Geral Ordinária',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC0159 Convocatória AG Ordinária - Plano Atividades Orçamento 2026.pdf`
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
        {/* <div className="timeline-extra-link-wrapper">
          <Link className="timeline-extra-link" to="/timeline/2025/extra">
            Ver acontecimentos adicionais 2025
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Timeline;
