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
      fact: 'Objeto: Contencioso eleitoral, cuja demandada é a FGP.',
      tone: 'negative',
    },
    {
      date: '11 janeiro 2025',
      title:' Eleições órgãos sociais FGP – 2.ª volta',
      fact: [
        'A convocatória da 2ª volta é divulgada a 27 de dezembro após a divulgação da ata da sessão realizada a 26 de dezembro.',
        'A realização da 2.ª volta ocorreu para além do prazo de oito dias contado da data da 1.ª volta, violando o art.º 13º, nº5, do REFGP.',
        'Considerando os resultados apurados em 15 de dezembro e a reapreciação dos votos nulos efetuada em 26 de dezembro, a convocatória para a 2.ª volta abrangeu apenas a eleição dos órgãos Conselho Fiscal e Conselho de Ajuizamento.',
      ],
      tone: 'positive',
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
        'Nas eleições realizadas em 15 de dezembro, os Delegados elegeram para este órgão dois membros da Lista B e um membro da Lista A. Todos os eleitos tomaram posse; contudo, o representante da Lista A apresentou a sua renúncia ao cargo pouco depois da tomada de posse.',
        'Para o preenchimento da vaga existente, existiam dois suplentes da mesma lista, os quais declinaram igualmente a assunção das funções para que haviam sido candidatos.',
        'Em consequência, a Lista A deixou de assegurar representação efetiva neste órgão.',
        'Não tendo sido encontrada uma solução junto das restantes listas que permitisse suprir a vaga existente, a FGP comunicou, em 18 de junho, a realização de novo ato eleitoral para este órgão, agendado para o dia 20 de julho.',
        'Importa salientar que, no âmbito destas eleições, não foi apresentada pela MAG nem pela Comissão Eleitoral qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis.',
      ],
      tone: 'alert',
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
      ]
    },
    {
      date: '3 novembro 2025',
      title: 'TAD anula atos eleitorais de dezembro de 2024',
      fact: 'O Tribunal foi claro “A violação de normas imperativas – dos artigos 31.º e 32.º do Regulamento Eleitoral e do artigo 5.º do Decreto-Lei n.º 248-B/2008 – invalida as deliberações da Mesa da Assembleia Geral e o ato eleitoral subsequente, por violação dos princípios da democraticidade e da transparência.”. Em consequência, o TAD anulou todo o processo eleitoral, de 15 e 26 de dezembro de 2024, bem como a segunda volta de 11 de janeiro de 2025, e ordenou a marcação de novo ato eleitoral, no prazo de 15 dias.',
      tone: 'positive',
      documents: [
        {
          label: 'Acórdão TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Acórdão 1_2025 VF_03_11_2025.pdf`
        }
      ]
    },
    {
      date: '4 novembro 2025',
      title: 'FGP Solicita ao TAD que a decisão arbitral de 3 de novembro não seja tomada pública',
      tone: 'positive',
      documents: [
        {
          label: 'Requerimento à oposição de publicação da decisão do TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Requerimento Oposição à Publicidade_04_11_2025.pdf`
        }
      ]
    },
    {
      date: '5 novembro 2025',
      title: 'TAD indefere o pedido da FGP de 4 de novembro',
      fact:'Para além do TAD ter indeferido o pedido da FGP, em resumo, o TAD considera inconstitucional a norma invocada pela FGP e reafirmou o princípio da publicidade e transparência das decisões judiciais.',
      tone: 'positive',
      documents: [
        {
          label: 'Requerimento à oposição de publicação da decisão do TAD',
          source: 'TAD',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Despacho n.º 8_05_11_2025.pdf`
        }
      ]
    },
    {
      date: '6 novembro 2025',
      title: 'Carta da Direção FGP - recurso no TCAS',
      fact: [
        'Segundo o advogado da FGP, a decisão do TAD referida não é definitiva, nem produz efeitos executórios, pelo que não existe qualquer obrigação de realizar novas eleições.',
        'No comunicado a FGP indica ter submetido um recurso no Tribunal Central Administrativo Sul.',
        'NOTA: importa esclarecer que afinal o recurso que a FGP diz ter submetido no TCAS foi apenas submetido a 24 e novembro.',
      ],
      tone: 'alert',
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
        '11 delegados, que representam 23% da AG, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária para definir a marcação da data, hora e local das eleições, em obediência ao disposto nos Estatutos e no REFPG, no prazo máximo de 15 dias após a notificação do Tribunal Arbitral do Desporto.',
        'NOTA: Esta AG nunca chegou a ser convocada pela MAG.',
        ],
      tone: 'negative',
    },
    {
      date: '11 novembro 2025',
      title: 'Comunicado Direção FGP',
      fact: 'A Direção da FGP informou a Mesa da Assembleia Geral para dar início ao processo eleitoral',
      tone: 'alert',
      documents: [
        {
          label: 'Comunicado Direção FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Comunicado Direção FGP - 11Nov25.pdf`
        }
      ]
    },
    {
      date: '18 novembro 2025',
      title: 'Anúncio Ato Eleitoral',
      fact:'No seguimento da Decisão do Tribunal Arbitral do Desporto (TAD) datada de 3 de novembro de 2025, Decisão com a qual a FGP não concorda, a MAG decide convocar eleições para os órgão Sociais e igualmente para os delegados à assembleia geral para os meses de fevereiro e março de 2026',
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
      date: '25 novembro 2025',
      title: 'TAD esclarece que a decisão de repetição do ato eleitoral incide apenas sobre as eleições dos órgãos sociais e não abrange a eleição dos Delegados',
      fact: [
        'No seguimento da contestação dos delegados ao anúncio eleitorial de 18 de novembro sobre a marcação de eleições para delegados à assembleia geral, foi apresentado ao TAD um pedido de de esclarecimento sobre se a decisão de 3 de novembro — que determinou a repetição das eleições — se incluíria também a eleição dos Delegados à Assembleia Geral.',
        'O TAD confirmou, por unanimidade dos árbitros, que a decisão incide apenas sobre as eleições dos órgãos federativos e não abrange a eleição dos Delegados.',
        'O Tribunal refere de forma explícita: “O ato eleitoral para órgãos federativos […] é distinto do ato eleitoral para a eleição de delegados. […] É o ato eleitoral para órgãos federativos que […] se encontra viciado, pelo que é o ato eleitoral para órgãos federativos que deverá ser repetido, com os mesmos delegados já eleitos previamente." (Despacho n. 9_25_11_2025)',
        ],
      tone: 'alert',
      documents: [
        {
          label: 'Pedido de esclarecimento da FGP no TAD',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Comunicado de esclarecimento da CC0154.pdf`
        },
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
      fact:'No seguimento do esclarecimento do TAD a proceder, brevemente, ao proceder ao anúncio da data das eleições.',
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
        'NOTA: A AG nos parâmetros solicitados nunca chegou a ser convocada pela MAG.',
        ],
      tone: 'negative',
    },
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
        'Nesta cronologia, para esta convocatória, importa salientar que não foi apresentada pela MAG qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis.',
        'Nesta sessão o então Presidente da MAG, Dr. Carlos Morais, anunciou a sua renúncia ao cargo.',
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
        <h1>Transparência e Memória: Cronologia dos Acontecimentos na FGP</h1>
        <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e a Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p>
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
                  ? event.fact.map((paragraph, index) => (
                      <p key={`${event.title}-fact-${index}`}>{paragraph}</p>
                    ))
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

