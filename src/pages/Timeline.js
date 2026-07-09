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
    {
      date: '4 junho 2024',
      title: 'Publicação dos Estatutos Alterados da FGP no Portal da Justiça',
      fact: [
          'Publicação da alteração estatutária no Portal da Justiça acontece apenas a 24 de novembro de 2024. ',
          'A partir desta data, a alteração estatutária que introduz, entre outras disposições, a alínea d) do n.º 1 do artigo 32.º dos Estatutos — que prevê a perda de mandato dos delegados por falta a duas Assembleias Gerais consecutivas ou quatro interpoladas — passa a produzir plenamente os seus efeitos, competindo à Mesa da Assembleia Geral proceder ao registo, contabilização e divulgação das faltas para os efeitos estatutariamente previstos.',
      ],
      tone: 'alert',
      // Add the image file name after placing it in public/images (e.g. "estatutos-portal-justica.jpg")
      image: 'print publicação estatutos.jpg.png',
      imageCaption: 'Figura 1 — No site da FGP são apresentadas duas datas para a Publicação dos estatutos no Portal da Justiça.',
      documents: [
        {
          label: 'Publicação estatutos 2024 no Portal da Justiça',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Publicação estatutos.pdf`
        }
      ]
    },
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
    {
      date: '2024',
      title: 'Atas de 2024',
      fact: 'A ata 181 de Assembleias Geral realizada em 2024 nunca foi divulgada. Por outro lado, a ata 180 da AG de 24 de novembro, está publicada no site da FGP, mas não foi aprovada em AG nem tem folha de presenças dos delegados.',
      tone: 'negative',
    },
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
          //url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - CC108 - Convocatória AG Eleitoral - Conselho Disciplina.pdf`
        },
        {
          label: 'Ata da AG Eleitoral intercalar',
          source: 'FGP',
          //url: `${process.env.PUBLIC_URL}/documents/FGP - 2025 - Ata AG Eleitoral Intercalar - Conselho Disciplina - 20 Jul 25.pdf`
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
