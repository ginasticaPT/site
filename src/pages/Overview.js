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
    { short: 'IPDJ', meaning: 'Instituto Português do Desporto e Juventude' },
    { short: 'TAFC', meaning: 'Tribunal Administrativo e Fiscal de Coimbra' }
  ];

  const generalSupportDocuments = [
    {
      label: 'Estatutos da FGP (2024)',
      source: 'FGP',
      url: `${process.env.PUBLIC_URL}/documents/FGP - 2024 - Publicação estatutos.pdf`
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
        <h1><strong>ELEIÇÕES ANULADAS, DELEGADOS AFASTADOS E RISCO DE SUSPENSÃO DE ESTATUTO DE UTILIDADE</strong></h1>
        <p>
          A Federação de Ginástica de Portugal, instituição de utilidade pública e de utilidade pública desportiva, encontra se atualmente <strong>mergulhada numa crise sem precedentes</strong> 
          e num processo que poderá <strong>conduzir à suspensão desse estatuto</strong>, resultante de uma sucessão de atos praticados pela Mesa da Assembleia Geral e pela Comissão Eleitoral, <strong>ao longo de mais de 18 meses</strong>, secundados pela Direção da FGP. 
        </p>
        <p>
          Neste período, a atuação da Mesa da Assembleia Geral e da Comissão Eleitoral, com o apoio da Direção, tem sido marcada por decisões irregulares e pela violação dos princípios básicos de legalidade e transparência. 
          Destacam-se a <strong>anulação de atos eleitorais pelo Tribunal Arbitral do Desporto e o incumprimento das suas decisões, a reversão, por deliberação posterior da Mesa, de votos que haviam sido declarados nulos, abertura de votos sem a presença dos representantes de todas as listas, usurpação de competências da Assembleia Geral, afastamento de delegados legalmente eleitos, não marcação de AGs Extraórdinárias</strong> requeridas legalmente pelos delegados, recusa da MAG em cumprir as deliberações da AG, irregularidades processuais, falta de publicitação de atos e sucessivos adiamentos eleitorais.
        </p>
        <p>
          Paralelamente, verifica-se o <strong>incumprimento reiterado de orientações e prazos impostos pelo IPDJ</strong>, evidenciando uma postura de desrespeito face às entidades de tutela e supervisão. Este conjunto de comportamentos compromete gravemente o funcionamento democrático da Federação e evidenciam falhas graves de funcionamento democrático e de respeito pelos princípios legais e estatutários.
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
            <li>Em 15 Dezembro de 2024,  1.ª volta das eleições dos órgãos sociais da FGP,  na contagem dos votos <strong>foram declarados pelo Presidente da MAG</strong> e pela Comissão Eleitoral <strong>6 votos nulos por correspondência por irregularidades</strong> e confirmou-se a necessidade de se realizar uma 2ªvolta.</li>
            <li><strong>A ata do ato eleitoral foi elaborada unilateralmente pelo à data Presidente da MAG</strong> apesar de ter sido contestada pelas Listas candidatas B e C, <strong>sem que tivesse sido objeto de nenhuma correção ou retificação</strong>. A referida ata foi publicada <strong>sem nunca ter sido assinada pelos mandatários das listas concorrentes</strong>.</li>
            <li>Em 23 de dezembro foi comunicado que por decisão do anterior Presidente da MAG e da Comissão eleitoral (Carlos Morais) e do atual Presidente da MAG (Raul Caldeira) - candidatos pela lista A e com conflito de interesses - que <strong>dois votos considerados nulos, 8 dias antes, seriam dados como validos e abertos numa sessão marcada para 26 de dezembro</strong>.</li>
            <li>Na sessão de 26 de dezembro, <strong>foram abertos dois votos dos 6 declarados nulos 8 dias antes sem a presença dos representantes das Listas concorrentes</strong>. Desta abertura de votos originou a proclamação da eleição dos órgãos Presidente, Direção e MAG.</li>
            <li>A <strong>"ressuscitação" dos votos nulos</strong>, a forma  e modo como o processo eleitoral foi conduzido e as irregularidades identificadas no apuramento eleitoral deram origem ao Processo TAD n.º 1/2025, marcando o início do contencioso institucional relacionado com as eleições federativas.</li>
            <li>Durante todo o ano de <strong>2024 nunca houve nenhuma informação nem comunicação sobre perdas de mandatos de Delegados por faltas</strong>.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2024">Mais detalhes 2024</Link>
        </article>

        <article className="year-card">
          <h2>2025</h2>
          <ul>
            <li>A 11 de janeiro realizou-se a 2.ª volta das eleições. A abertura de votos nulos em 26 de dezembro de 2024 originou que, ao contrário do que ficou determinado pelo Presidente da MAG e da Comissão Eleitoral, no dia 15/12/2024 a convocatória para a 2ªvolta incidiu apenas sobre os órgãos Conselho Fiscal e Conselho de Ajuizamento.</li>
            <li>Na 2ª volta, durante <strong>a contagem e validação dos votos por correspondência, não foi permitida a presença de nenhum representante das Listas concorrentes</strong> a este ato de contagem e validação. Os votos por correspondência foram abertos e contados sem a presença de representantes da Lista B e, unicamente, com a presença do Presidente da MAG (candidato da Lista A e interessado nos resultado), o qual decidiu a "ressuscitação" de votos nulos.</li>
            <li><strong>As eleições intercalares para Conselho Disciplina</strong> de 20/07/2025 foram motivadas pela <strong>renúncia do membro eleito da Lista A e pela recusa dos respetivos suplentes em assumir funções</strong>. Neste ato eleitoral repetiu-se <strong>a abertura de votos por correspondência sem representantes de todas as listas</strong> e a ausência de informação oficial sobre eventuais delegados em perda de mandato.</li>
            <li>Também em 2025, apesar de a norma estatutária vigorar e de se terem realizado várias Assembleias Gerais, <strong>nunca houve informação nem comunicação sobre faltas e perdas de mandatos de Delegados</strong>.</li>
            <li>Em 3 de novembro de 2025, <strong>o TAD anulou os atos eleitorais</strong> de 15 e 26 de dezembro de 2024, bem como a 2.ª volta realizada em 11 de janeiro de 2025, por <strong>violação</strong> de normas legais e regulamentares consideradas essenciais aos <strong>princípios da democraticidade e da transparência, determinando a repetição das eleições em 15 dias</strong>.</li>
            <li>Em novembro de 2025, a MAG anunciou a realização de novas eleições para os órgãos sociais e para os Delegados à Assembleia Geral. Na sequência de pedidos de esclarecimento, <strong>o TAD confirmou</strong> que a repetição determinada incidia exclusivamente sobre <strong>as eleições dos órgãos federativos com o mesmo colégio eleitoral</strong>, mantendo-se válidas as eleições dos Delegados já realizadas.</li>
            <li>Em Novembro de 2025, mais de 20% dos <strong>delegados</strong>, nos termos dos estatutos art.º47 nº3, <strong>solicitam</strong> que seja convocada uma <strong>Assembleia Geral Extraordinária</strong> para definir a marcação da data, hora e local das eleições, em obediência ao disposto nos Estatutos e no REFPG.</li>
            <li>A <strong>MAG recusou liminarmente</strong> os pedidos dos Delegados violando os direitos dos delegados e da AG.</li>   
            <li>Em 13 de dezembro de 2025, na Assembleia Geral n.º 185, o Presidente da Mesa da Assembleia Geral e da Comissão Eleitoral (Carlos Morais) — responsável pela condução de todo o processo eleitoral anulado — anuncia a sua renúncia. A ata desta assembleia permanece, até à presente data, por publicar.</li>
            <li>Neste ano de <strong>2025, a FGP não publicou</strong> no sítio oficial da FGP nenhuma das <strong>atas das Assembleias Gerais</strong> realizadas em 2025, <strong>incluindo folhas de presença</strong>. As únicas atas publicadas em 2025 são as de natureza eleitoral.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2025">Mais detalhes 2025</Link>
        </article>

        <article className="year-card">
          <h2>2026</h2>
          <ul>
            <li><strong>Exclusão e substituição irregular de delegados 15 dias antes das eleições</strong>. Configura <strong>usurpação</strong> de competências da Assembleia Geral pela MAG, designadamente quanto à declaração unilateral de perda de mandato de delegados eleitos.</li>
            <li>MAG decide pela suspensão das eleições em 27/02/2026.</li>
            <li>Março de 2026, Intervenção do <strong>IPDJ</strong> para regularização da situação do colégio eleitoral estipulando <strong>30 dias para a FGP realizar eleições</strong> e apresentar ata da tomada de posse.</li>
            <li>Após duas AGs (7 e 23/03/2026), <strong>Assembleia Geral delibera por maioria expressiva a manutenção dos mandatos de cinco delegados</strong>.</li>
            <li><strong>MAG não assume os resultados da AG</strong> sobre a manutenção dos cinco delegados.</li>
            <li>A 27 de março, 15 delegados requerem, ao abrigo do art. 47.º, n.º 3, dos Estatutos, a convocação de uma Assembleia Geral Extraordinária para apreciação da destituição da Mesa e substituição da Comissão Eleitoral que tem como Presidente, a Inês Nabais, em desconformidade com o Regulamento Eleitoral, por integrar uma das listas candidatas.</li>
            <li>A MAG continuou a recusa sistemática de realização da AG Extraordinária requerida, assim como a resposta a quaisquer pedidos dos Delegados</li>
            <li>Após <strong>intervenções sucessivas do IPDJ</strong>, em Maio de 2026, determina um último <strong>prazo de 30 dias, improrrogável,</strong> para regularização da situação eleitoral e alertando para a suspensão da Utilidade Pública.</li>
            <li>Durante 2026, continuou a recusa sistemática de realização de Assembleias Gerais a pedidos dos Delgados.</li>
            <li>A 16 de junho, a MAG e a Direção emitem comunicados. A Direção informa ter recorrido do acórdão do TAD — recurso sem efeito suspensivo — e invoca «incerteza jurídica» para justificar a não realização das eleições; a MAG sustenta que não lhe compete reconhecer a deliberação da Assembleia Geral</li>
            <li>24 Junho de 2026, <strong>as Associações de Ginástica do Centro e do Distrito de Leiria</strong> submetem uma <strong>ação judicial contra a FGP</strong> com o <strong>objetivo de perda de mandato dos 5 delegados</strong> que foram votados em AG, 3 meses antes, por uma grande maioria para a sua manutenção.</li>
          </ul>
          <Link className="year-card-link" to="/timeline/2026">Mais detalhes 2026</Link>
        </article>
      </section>

      <footer className="overview-footer-note" aria-label="Nota final">
        <p><strong>Pela verdade e transparência.</strong></p>
        <p>Feito por Delegados à Assembleia Geral da FGP.</p>
        <p>Informação atualizada a 5 de julho de 2026.</p>
      </footer>
    </div>
  );
}

export default Overview;
