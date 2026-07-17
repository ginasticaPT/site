import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [
    {
      date: '15 dezembro 2024',
      title: 'Eleições órgãos sociais FGP – 1.ª volta',
      fact: [
        <p>Durante o ato eleitoral, na contagem dos votos <strong>foram declarados pelo Presidente da Mesa AG e pela Comissão Eleitoral 6 votos nulos por correspondência</strong> por irregularidades.</p>,
        'De acordo com a contagem de votos registada, os órgãos Conselho de Disciplina e Conselho de Justiça foram eleitos sem que tenham sido reconhecidos (violação do art.º 13.º do REFGP).',
        'Os restantes órgãos obrigariam a uma 2ª volta.',
        'A ata do ato eleitoral foi elaborada unilateralmente pelo então Presidente da MAG apesar de ter sido contestada pelas Listas candidatas B e C, sem que tivesse sido objeto de nenhuma correção ou retificação. A referida ata nunca foi assinada pelos mandatários das listas concorrentes, em violação do disposto no n.º 3 do artigo 8.º do REFGP',
        'Ao contrário do estipulado legalmente, não aconteceu a publicação dos resultados eleitorais definitivos no site da FGP no prazo legal (violação do art.º 11.º do REFGP).'
      ],
      rules: [
        'Art.º 8.º, n.º 3 do REFGP.',
        'Art.º 11.º e 13.º do REFGP.',
        'Art. 5.º, n.º 1, do Decreto-Lei n.º 248-B/2008 — princípios da democraticidade e da transparência.',
        'Nota interpretativa: Art.º 50º do REFGP - Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Ata da Assembleia Geral Eleitoral 15dez',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata_AG Eleitoral_15 dezembro.pdf`
        }
      ]
    },
    {
      date: '23 dezembro 2024',
      title: 'Comunicado Presidente MAG',
      fact: <p>Às 22h19 de 23 de dezembro, na véspera de Natal e sem cumprir o prazo mínimo legal para notificação, <strong>o à data Presidente da MAG (Carlos Morais)</strong> comunica que no dia 26 de dezembro, às 14h00, <strong>por sua decisão e do atual Presidente da MAG (Raul Caldeira) – ambos candidatos pela lista A e com conflito de interesses - decidiram que votos que foram considerados nulos</strong> durante a 1ª volta eleitoral de dia 15 de dezembro de 2024, passados 8 dias, <strong>foram considerados validos</strong> tendo por base reclamação que não podia ser atendida nem mesmo apresentada devido à sua extemporaneidade e ilegalidade violando as regras legais de atos eleitorais (Regime Eleitoral para o Presidente da República e da Assembleia da Republica).</p>,
      rules: [
        'Art.º 30.º e 32.º do REFGP.',
        'Art. 5.º, n.º 1, do Decreto-Lei n.º 248-B/2008 — princípios da democraticidade e da transparência.',
        'Nota interpretativa: Art.º 50º do REFGP - Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
      ],
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
      fact: [
        <p><strong>O Presidente da MAG</strong>, que igualmente presidia à Comissão Eleitoral, Joana Ramalho, membro da Comissão Eleitoral, e Teresa Loureiro, representante da Lista A, <strong>sem a presença das outras duas Listas concorrentes, abriram dois votos nulos</strong>, dos 6 considerados nulos 11 dias antes pelo mesmo Presidente da MAG. <strong>A "ressuscitação" destes votos nulos escolhidos que permitiu a proclamação da eleição do próprio Presidente da MAG,  da MAG e da Direção da FGP</strong>. (Os decisores são os mesmos que tiram partido da decisão – Um claro conflito de interesses direto).</p>,
        'A ata deste ato também procedeu à proclamação dos resultados dos órgãos Conselho de Disciplina e Conselho de Justiça, anteriormente eleitos em 15 de dezembro. (contrariando os princípios da transparência eleitoral (art. 50.º do REFGP).)',
      ],
      rules: [
        'Art. 5.º, n.º 1, do Decreto-Lei n.º 248-B/2008 — princípios da democraticidade e da transparência.',
        'Nota interpretativa: Art.º 50º do REFGP - Regime eleitoral para o Presidente da República é regulado pelo Decreto-Lei n.º 319-A/76, e o da Assembleia da República pela Lei n.º 14/79, sendo ambos periodicamente atualizados pela Comissão Nacional de Eleições.'
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Ata da Assembleia Geral Eleitoral 26dez',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Ata AG Eleitoral_ 26 dezembro.pdf`
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
        <h1>Cronologia dos Acontecimentos 2024</h1>
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
        <div className="timeline-extra-link-wrapper">
          <Link className="timeline-extra-link" to="/timeline/2024/extra">
            Ver acontecimentos adicionais 2024
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
