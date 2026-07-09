import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const DOCUMENTS_BASE_URL = `${process.env.PUBLIC_URL}/documents`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;
  const getDocumentUrl = (fileName) => `${DOCUMENTS_BASE_URL}/${encodeURIComponent(fileName)}`;

  const acronyms = [
    { short: 'FGP', meaning: 'Federação de Ginástica de Portugal' },
    { short: 'MAG', meaning: 'Mesa da Assembleia Geral' },
    { short: 'AG', meaning: 'Assembleia Geral' },
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
      fact: 'Após a contagem dos votos, foram detetadas irregularidades no apuramento eleitoral e na elaboração da ata da eleição, designadamente ao nível da declaração de votos nulos que viriam a ser revertidos por deliberação posterior da Mesa da Assembleia Geral, matéria que deu origem ao Processo TAD n.º 1/2025',
      tone: 'negative',
      documents: [
        {
          label: 'Exposição de contestação',
          source: 'Interessados',
          url: 'https://example.com/documentos/contestacao-procedimentos.pdf'
        }
      ]
    },
    {
      date: 'Junho 2024',
      title: 'Assembleia Geral',
      fact: 'Realizou-se a Assembleia Geral, com registo dos principais pontos discutidos e respetivas deliberações.',
      tone: 'neutral',
      documents: [
        {
          label: 'Ata da Assembleia Geral',
          source: 'FGP',
          url: 'https://example.com/documentos/ata-assembleia-geral.pdf'
        }
      ]
    },
    {
      date: 'Julho 2024',
      title: 'Submissão ao TAD e IPDJ',
      fact: 'Foram remetidos elementos para apreciação externa, reforçando o pedido de análise institucional.',
      tone: 'alert',
      documents: [
        {
          label: 'Submissão para o TAD',
          source: 'Requerente',
          url: 'https://example.com/documentos/submissao-tad.pdf'
        },
        {
          label: 'Submissão para o IPDJ',
          source: 'Requerente',
          url: 'https://example.com/documentos/submissao-ipdj.pdf'
        }
      ]
    },
    {
      date: 'Setembro 2024',
      title: 'Atualização do Dossiê',
      fact: 'Novos documentos e cronologia consolidada foram disponibilizados para maior transparência.',
      tone: 'positive',
      documents: [
        {
          label: 'Dossiê consolidado',
          source: 'Arquivo público',
          url: 'https://example.com/documentos/dossie-consolidado.pdf'
        }
      ]
    }
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
