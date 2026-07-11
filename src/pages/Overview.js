import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Overview.css';

function Overview() {
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

  return (
    <div className="overview-page">
      <header className="overview-header">
        <Link to="/">
          <button className="overview-back-button">← Voltar</button>
        </Link>
        <h1>Eleições Órgãos Sociais FGP 2025–2028</h1>
        <h1>Enquadramento dos acontecimentos</h1>
        <p>
          A Federação de Ginástica de Portugal, instituição de utilidade pública e de utilidade pública desportiva, encontra‑se numa situação de instabilidade institucional,
          resultante de uma sucessão de atos praticados pela Mesa da Assembleia Geral (MAG) e pela Comissão Eleitoral, ao longo de mais de 18 meses, corroborados pela Direção da FGP. 
        </p>
        <p>
          Apresentam‑se de seguida, por ordem cronológica, os acontecimentos que se revelaram mais relevantes para a evolução deste processo e que culminaram em procedimentos junto do TAD e IPDJ.
          Cada evento é acompanhado pelas evidências e documentos disponíveis, permitindo-lhe construir a sua própria interpretação dos factos.
        </p>
      </header>

      <section className="overview-legend" aria-label="Siglas e documentos gerais">
        <div className="overview-legend-card">
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
        <div className="overview-legend-card">
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

      <section className="year-grid" aria-label="Resumo anual de acontecimentos">
        <article className="year-card">
          <h2>2024</h2>
          <ul>
            <li>Na 1.ª volta das eleições dos órgãos sociais da FGP foram identificadas irregularidades no apuramento eleitoral dos resultados e confirmou-se a necessidade de se realizar uma 2ªvolta.</li>
            <li>A ata eleitoral foi elaborada unilateralmente pelo então Presidente da MAG, tendo sido posteriormente contestada em que tivesse sido objeto de retificação, nem assinada pelos mandatários das listas concorrentes.</li>
            <li>Em 23 de dezembro foi comunicado que dois votos anteriormente considerados nulos seriam reapreciados numa sessão marcada para 26 de dezembro.</li>
            <li>Na sessão de 26 de dezembro, foram reabertos e reapreciados dois votos anteriormente considerados nulos. Desta reapreciação resultou a proclamação da eleição dos órgãos Presidente, Direção e MAG.</li>
            <li>A reapreciação dos votos nulos, a forma como o processo eleitoral foi conduzido e as irregularidades identificadas no apuramento eleitoral deram origem ao Processo TAD n.º 1/2025, marcando o início do contencioso institucional relacionado com as eleições federativas.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2024">Mais detalhes 2024</Link>
        </article>

        <article className="year-card">
          <h2>2025</h2>
          <ul>
            <li>A realização da 2.ª volta das eleições ocorreu a 11 de janeiro para além do prazo de oito dias contado da data da 1.ª volta, violando o art.º 13º, nº5, do REFGP..</li>
            <li>Após a aceitação dos votos nulos em 26 de dezembro de 2024, a convocatória para a 2ªvolta incidiu apenas sobre os órgãos Conselho Fiscal e Conselho de Ajuizamento.</li>
            <li>Em 3 de novembro de 2025, o TAD anulou os atos eleitorais de 15 e 26 de dezembro de 2024, bem como a 2.ª volta realizada em 11 de janeiro de 2025, por violação de normas legais e regulamentares consideradas essenciais aos princípios da democraticidade e da transparência, determinando a repetição das eleições.</li>
            <li>Em novembro de 2025, a MAG anunciou a realização de novas eleições para os órgãos sociais e para os Delegados à Assembleia Geral. Na sequência de pedidos de esclarecimento, o TAD confirmou que a repetição determinada incidia exclusivamente sobre as eleições dos órgãos federativos, mantendo-se válidas as eleições dos Delegados já realizadas.</li>   
          </ul>
          <Link className="year-card-link" to="/timeline/2025">Mais detalhes 2025</Link>
        </article>

        <article className="year-card">
          <h2>2026</h2>
          <ul>
            <li>Exclusão e substituição irregular de delegados antes das eleições.</li>
            <li>Intervenção do IPDJ e suspensão das eleições.</li>
            <li>Assembleia Geral delibera a manutenção dos mandatos de cinco delegados.</li>
            <li>Intervenções sucessivas do IPDJ e risco para a Utilidade Pública Desportiva</li>
            <li>As Associações de Ginástica do Centro e do Distrito de Leiria submetem uma ação judicial contra a FGP</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2026">Mais detalhes 2026</Link>
        </article>
      </section>
    </div>
  );
}

export default Overview;
