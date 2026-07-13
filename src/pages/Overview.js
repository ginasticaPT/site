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
        <h1><strong>ELEIÇÕES ANULADAS, DELEGADOS AFASTADOS E AMEAÇA DE SANÇÃO DO IPDJ</strong></h1>
        <p>
          A Federação de Ginástica de Portugal, instituição de utilidade pública e de utilidade pública desportiva, encontra se atualmente <strong>mergulhada numa crise sem precedentes</strong> 
          e num processo que poderá <strong>conduzir à suspensão desse estatuto</strong>, resultante de uma sucessão de atos praticados pela Mesa da Assembleia Geral e pela Comissão Eleitoral, <strong>ao longo de mais de 18 meses</strong>, corroborados pela Direção da FGP. 
        </p>
        <p>
          Neste período, a atuação da Mesa da Assembleia Geral e da Comissão Eleitoral, com o apoio da Direção, tem sido marcada por decisões irregulares e pela violação dos princípios básicos de legalidade e transparência. 
          Destacam-se a <strong>anulação de atos eleitorais pelo Tribunal Arbitral do Desporto, incumprimento de decisões do Tribunal Arbitral do Desporto, transformação de votos nulos em validos, abertura de votos sem a presença dos representantes das Listas, usurpação de competências da Assembleia Geral, afastamento de delegados legalmente eleitos, não marcação de AG</strong> pedidas pelos delegados, recusa da MAG em cumprir as deliberações da AG, irregularidades processuais, falta de publicitação de atos e sucessivos adiamentos eleitorais.
        </p>
        <p>
          Paralelamente, verifica-se o incumprimento reiterado de orientações e prazos impostos pelo Instituto Português do Desporto e Juventude, evidenciando uma postura de desrespeito face às entidades de tutela e supervisão.
          Este conjunto de comportamentos compromete gravemente o funcionamento democrático da Federação e evidenciam falhas graves de funcionamento democrático e de respeito pelos princípios legais e estatutários.
        </p>
        <p>
          Apresentam se de seguida, por ordem cronológica, os acontecimentos que se revelaram mais relevantes para a evolução deste processo e que culminaram em procedimentos junto do TAD e IPDJ. 
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

      <section className="year-header" aria-label="Cronologia de acontecimentos">
        <h2><strong>Cronologia dos factos e irregularidades</strong></h2>
        <p>
          Apresenta-se em seguida a cronologia documentada dos eventos relevantes, com indicação da irregularidade identificada em cada momento.
        </p>
      </section>

      <section className="year-grid" aria-label="Resumo anual de acontecimentos">
        <article className="year-card">
          <h2>2024</h2>
          <ul>
            <li>Em 15 Dezembro de 2024,  1.ª volta das eleições dos órgãos sociais da FGP,  na contagem dos votos foram declarados pelo Presidente da MAG e da Comissão Eleitoral nulos 6 votos por correspondência por irregularidades  e confirmou-se a necessidade de se realizar uma 2ªvolta.</li>
            <li>A ata do ato eleitoral foi elaborada unilateralmente pelo à data Presidente da MAG apesar de ter sido contestada pelas Listas candidatas B e C, sem que tivesse sido objeto de nenhuma correção ou retificação. A referida ata foi publicada sem nunca ter sido assinada pelos mandatários das listas concorrentes.</li>
            <li>Em 23 de dezembro foi comunicado, por decisão do Presidente da MAG e da Comissão eleitoral (candidato pela lista A e interessado directo) que dois votos  considerados nulos, 8 dias antes, seriam dados como validos e abertos  numa sessão marcada para 26 de dezembro.</li>
            <li>Na sessão de 26 de dezembro, foram abertos dois votos dos 6 declarados nulos 8 dias antes sem a presença dos representantes das Listas concorrentes. Desta abertura de votos  a proclamação da eleição dos órgãos Presidente, Direção e MAG.</li>
            <li>A ressuscitação dos votos nulos, a forma  e modo como o processo eleitoral foi conduzido e as irregularidades identificadas no apuramento eleitoral deram origem ao Processo TAD n.º 1/2025, marcando o início do contencioso institucional relacionado com as eleições federativas.</li>
            <li>Durante todo o ano de 2024 nunca houve nenhuma informação nem comunicação sobre perdas de mandatos de Delegados por faltas.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2024">Mais detalhes 2024</Link>
        </article>

        <article className="year-card">
          <h2>2025</h2>
          <ul>
            <li>A 11 de janeiro a realização da 2.ª volta das eleições ocorreu  para além do prazo de oito dias contado da data da 1.ª volta.</li>
            <li>Na 2ª volta, durante a contagem e validação dos votos por correspondência, contrariando o Estatutos e REFGP não foi permitida a presença de nenhum representante das Listas concorrentes a este ato de contagem e validação. Os votos por correspondência foram abertos e contados sem a presença de representantes da Lista B e, unicamente, com a presença do Presidente da MAG (candidato da Lista A e interessado nos resultado), o qual decidiu a ressuscitação de votos nulos.</li>
            <li>A abertura de votos nulos em 26 de dezembro de 2024 originou que, ao contrário do que ficou determinado pelo Presidente da MAG e da Comissão Eleitoral, no dia 15/12/2024a convocatória para a 2ªvolta incidiu apenas sobre os órgãos Conselho Fiscal e Conselho de Ajuizamento.</li>
            <li>Neste ano de 2025, a FGP não publicou no sítio oficial da FGP de nenhuma das atas das Assembleias Gerais realizadas em 2025, incluindo folhas de presença. As únicas atas publicadas em 2025 são as de natureza eleitoral.</li>
            <li>As eleições intercalares para Conselho Disciplina de 20/07/2025 foram motivadas pela renúncia do membro eleito da Lista A e pela recusa dos respetivos suplentes em assumir funções. Neste ato eleitoral repetiu-se a abertura de votos por correspondência sem representantes de todas as listas e a ausência de informação oficial sobre eventuais delegados em perda de mandato.</li>
            <li>Durante todo o ano de 2025 nunca houve informação nem comunicação sobre faltas e perdas de mandatos de Delegados.</li>
            <li>Em 3 de novembro de 2025, o TAD anulou os atos eleitorais de 15 e 26 de dezembro de 2024, bem como a 2.ª volta realizada em 11 de janeiro de 2025, por violação de normas legais e regulamentares consideradas essenciais aos princípios da democraticidade e da transparência, determinando a repetição das eleições em 15 dias.</li>
            <li>Em novembro de 2025, a MAG anunciou a realização de novas eleições para os órgãos sociais e para os Delegados à Assembleia Geral. Na sequência de pedidos de esclarecimento, o TAD confirmou que a repetição determinada incidia exclusivamente sobre as eleições dos órgãos federativos com o mesmo colégio eleitoral, mantendo-se válidas as eleições dos Delegados já realizadas.</li>
            <li>Em Novembro e Dezembro de 2025, mais de 20% dos delegados, nos termos dos estatutos art.º47 nº3, solicitam que seja convocada uma Assembleia Geral Extraordinária para definir a marcação da data, hora e local das eleições, em obediência ao disposto nos Estatutos e no REFPG.</li>
            <li>A MAG recusou liminarmente os pedidos violando os direitos dos delegados e da AG</li>   
          </ul>
          <Link className="year-card-link" to="/timeline/2025">Mais detalhes 2025</Link>
        </article>

        <article className="year-card">
          <h2>2026</h2>
          <ul>
            <li>Exclusão e subtituição irregular de delegados 15 dias antes das eleições. Configura usurpação de competências da Assembleia Geral pela MAG, designadamente quanto à declaração unilateral de perda de mandato de delegados eleitos.</li>
            <li>MAG decide pela suspensão das eleições em 27/02/2026.</li>
            <li>Março de 2026, Intervenção do IPDJ para regularização da situação do colégio eleitoral estipulando 30 dias para a FGP realizar eleições e apresentar ata da tomada de posse.</li>
            <li>Após duas AGs (7 e 23/03/2026), Assembleia Geral delibera a manutenção dos mandatos de cinco delegados.</li>
            <li>MAG não assume os resultados da AG sobre a manutenção dos cinco delegados.</li>
            <li>Após intervenções sucessivas do IPDJ, em Maio de 2026, determina um último prazo de 30 dias, improrrogável,  para regularização da situação eleitoral e alertando para a suspensão da Utilidade Pública.</li>
            <li>Durante 2026, continuou a resusa sistemática de realização de Assembleias Gerais a pedidos dos Delgados.</li>
            <li>24 Junho de 2026, as Associações de Ginástica do Centro e do Distrito de Leiria submetem uma ação judicial contra a FGP com o objetivo de perda de mandato dos 5 delegados que foram votados em AG, 3 meses antes, por uma grande maioria para a sua manutenção.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2026">Mais detalhes 2026</Link>
        </article>
      </section>
    </div>
  );
}

export default Overview;
