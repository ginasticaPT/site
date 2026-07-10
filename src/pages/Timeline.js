import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const acronyms = [
    { short: 'FGP', meaning: 'Federação de Ginástica de Portugal' },
    { short: 'MAG', meaning: 'Mesa da Assembleia Geral' },
    { short: 'AG', meaning: 'Assembleia Geral' },
    { short: 'REFGP', meaning: 'Regulamento Eleitoral da Federação de Ginástica de Portugal' },
    { short: 'TAD', meaning: 'Tribunal Arbitral do Desporto' },
    { short: 'TCAS', meaning: 'Tribunal Central Administrativo Sul' },
    { short: 'IPDJ', meaning: 'Instituto Português do Desporto e Juventude' }
  ];

  const generalSupportDocuments = [
    {
      label: 'Estatutos da FGP (2024)',
      source: 'FGP',
      url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Estatutos.pdf`
    },
    {
      label: 'Regulamento Eleitoral da FGP (2024)',
      source: 'FGP',
      url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Regulamento Eleitoral.pdf`
    }
  ];

  const events = [
    // {
    //   date: '14 janeiro 2024',
    //   title: 'Alterações estatutárias - 1ª sessão',
    //   fact: 'TBD.',
    //   tone: 'positive',
    //   documents: [
    //     {
    //       label: 'Convocatória da sessão',
    //       source: 'FGP',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP_Convocatória_Assembleia Geral Extraordinária_176_14.JAN_2024.pdf`,
    //     },
    //     {
    //       label: 'Relatório fundamentação alterações estatutárias',
    //       source: 'FGP',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP-Relatório-Fundamentação-Estatutos-Final_CRE_14 DEZ 2023.pdf`
    //     },
    //     {
    //       label: 'Ata da sessão',
    //       source: 'FGP',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP_Ata_Assembleia Geral Extraordinária_176_14.JAN_2024.pdf`
    //     }
    //   ]
    // },
    // {
    //   date: '23 março 2024',
    //   title: 'Alterações estatutárias - 2ª sessão',
    //   fact: 'Foi publicada a convocatória para os primeiros atos formais do processo eleitoral da FGP.',
    //   tone: 'positive',
    //   documents: [
    //     {
    //       label: 'Convocatória da 2ª sessão',
    //       source: 'FGP',
    //       url: 'https://example.com/documentos/convocatoria-2a-sessao.pdf'
    //     }
    //   ]
    // },
    // {
    //   date: '4 junho 2024',
    //   title: 'Publicação dos Estatutos Alterados da FGP no Portal da Justiça',
    //   fact: [
    //       'Publicação da alteração estatutária no Portal da Justiça acontece apenas a 24 de novembro de 2024. ',
    //       'A partir desta data, a alteração estatutária que introduz, entre outras disposições, a alínea d) do n.º 1 do artigo 32.º dos Estatutos — que prevê a perda de mandato dos delegados por falta a duas Assembleias Gerais consecutivas ou quatro interpoladas — passa a produzir plenamente os seus efeitos, competindo à Mesa da Assembleia Geral proceder ao registo, contabilização e divulgação das faltas para os efeitos estatutariamente previstos.',
    //   ],
    //   tone: 'alert',
    //   // Add the image file name after placing it in public/images (e.g. "estatutos-portal-justica.jpg")
    //   image: 'print publicação estatutos.jpg.png',
    //   imageCaption: 'Figura 1 — No site da FGP são apresentadas duas datas para a Publicação dos estatutos no Portal da Justiça.',
    //   documents: [
    //     {
    //       label: 'Publicação estatutos 2024 no Portal da Justiça',
    //       source: 'FGP',
    //       url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Publicação estatutos.pdf`
    //     }
    //   ]
    // },
    {
      date: '15 dezembro 2024',
      title: 'Eleições órgãos sociais FGP – 1.ª volta',
      fact: [
        'De acordo com a contagem de votos registada, os órgãos Conselho de Disciplina e Conselho de Justiça foram eleitos sem que tenham sido reconhecidos (violação do art.º 13.º do REFGP). Os restantes órgãos obrigariam a uma 2ª volta.',
        'Após a contagem dos votos, foram detetadas irregularidades no apuramento eleitoral e na elaboração da ata da eleição, designadamente ao nível da declaração de votos nulos, cuja validade viria posteriormente a ser reconhecida por deliberação da MAG, matéria que deu origem ao Processo TAD n.º 1/2025.',
        'Adicionalmente, a ata do ato eleitoral foi elaborada unilateralmente pelo então Presidente da MAG e posteriormente contestada, sem que tivesse sido objeto de correção ou retificação. A referida ata nunca foi assinada pelos mandatários das listas concorrentes, em violação do disposto no n.º 3 do artigo 8.º do REFGP',
        'Ausência da publicação dos resultados eleitorais definitivos no site da FGP (violação do art.º 11.º do REFGP). A ata do ato eleitoral apenas foi disponibilizada aos delegados, a 16 de dezembro.'
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Ata da Assembleia Geral Eleitoral 15dez - violação artºs 8º e 11º do REFGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata_AG Eleitoral_15 dezembro.pdf`
        }
        
      ]
    },
    {
      date: '23 dezembro 2024',
      title: 'Comunicado Presidente MAG - violação art.ºs 30º e 32º do REFGP',
      fact: 'Às 22h19 de 23 de dezembro, em pleno período natalício e sem qualquer espaço temporal legal, o Presidente da MAG, unilateralmente, comunica que no dia 26 de dezembro, às 14h00, votos que foram considerados nulos pelos próprios durante o processo eleitoral de dia 15 de dezembro, tendo por base uma reclamação que não podia ser atendida nem mesmo apresentada devido à sua extemporaneidade.',
      tone: 'negative',
      documents: [
        {
          label: 'Comunicado Presidente MAG',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - 24 Dez 24 - Comunicado Presidente MAG.pdf`
        }
      ]
    },
    {
      date: '26 dezembro 2024',
      title: 'Eleições órgãos sociais FGP – Abertura votos nulos',
      fact: 'Com a presença do Presidente da MAG, que igualmente presidia à Comissão Eleitoral, de Joana Ramalho, membro da Comissão Eleitoral, e de Teresa Loureiro, representante da Lista A, foram reabertos dois votos anteriormente considerados nulos. Da reapreciação destes votos resultou o apuramento dos resultados constantes da ata elaborada na ocasião, tendo sido nela proclamada a eleição dos órgãos Presidente, Direção e MAG da FGP. A mesma ata procedeu ainda à proclamação dos resultados dos órgãos Conselho de Disciplina e Conselho de Justiça, anteriormente eleitos em 15 de dezembro.',
      tone: 'negative',
      documents: [
        {
          label: 'Ata da Assembleia Geral Eleitoral 26dez',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata AG Eleitoral_ 26 dezembro.pdf`
        }
      ]
    },
    // {
    //   date: '2024',
    //   title: 'Atas de 2024',
    //   fact: 'A ata 181 de Assembleias Geral realizada em 2024 nunca foi divulgada. Por outro lado, a ata 180 da AG de 24 de novembro, está publicada no site da FGP, mas não foi aprovada em AG nem tem folha de presenças dos delegados.',
    //   tone: 'negative',
    // },
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
      title: 'Anúncio de Ato Eleitoral para os órgãos sociais da FGP',
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
      date: '13 dezembro 2025',
      title: 'Convocatória de Assembleia Geral Ordinária',
      fact: 'Nesta cronologia, para esta convocatória, importa salientar que não foi apresentada pela MAG qualquer relação de delegados que se encontrassem em situação de perda de mandato ou em desconformidade com as disposições estatutárias aplicáveis.',
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
        <Link to="/">
          <button className="back-button">← Voltar</button>
        </Link>
        <h1>Transparência e Memória: Cronologia dos Acontecimentos na FGP</h1>
        <p>Uma viagem através de decisões, acontecimentos e momentos que moldaram o processo eleitoral e a Assembleia Geral da Federação de Ginástica de Portugal desde 2024.</p>
        <p>Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.</p>
      </header>
      <div className="timeline-content">
        <section className="timeline-legend" aria-label="Siglas e documentos gerais">
          <div className="timeline-legend-card">
            <h2>Siglas</h2>
            <ul>
              {acronyms.map((item) => (
                <li key={item.short}>
                  <strong>{item.short}</strong>
                  <span>{item.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="timeline-legend-card">
            <h2>Documentos de suporte gerais</h2>
            <ul>
              {generalSupportDocuments.map((document) => (
                <li key={document.label}>
                  <a href={document.url} target="_blank" rel="noreferrer">
                    {document.label}
                  </a>
                  <span>{document.source}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
