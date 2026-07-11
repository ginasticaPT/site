import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.css';

function Timeline() {
  const IMAGES_BASE_URL = `${process.env.PUBLIC_URL}/images`;
  const getImageUrl = (fileName) => `${IMAGES_BASE_URL}/${encodeURIComponent(fileName)}`;

  const events = [
    {
      date: '12 fevereiro 2026',
      title: 'Declaração irregular de perda de mandato de delegados',
      fact: [
        'Nesta data, 5 delegados são informados que devido a faltas a duas sessões seguidas ou quatro interpoladas da assembleia geral, perdem automaticamente o mandato.',
        'Esta decisão, de perda, compete exclusivamente à AG, de acordo com o art.º 32, nº2, dos estatutos, que é claro que Compete à Assembleia Geral deliberar sobre a perda do mandato dos titulares dos órgãos federativos, em conformidade com os estatutos e a lei.',
      ],
      tone: 'negative',
    },
    {
      date: '13 fevereiro 2026',
      title: 'Substituição irregular de delegados eleitos',
      fact: [
        'A 15 dias das eleições é enviado, aos delegados, o caderno eleitoral com 5 delegados substitídos por delegados que ficaram em 2º lugar nas eleições de delegados de novembro de 2024.',
        'Esta decisão unilaretal da Comissão eleitoral viola o art.º 32, nº2, dos estatutos.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Caderno Eleitoral para as eleições dos órgãos sociais da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - CC024 - Caderno eleitoral eleições Órgãos Sociais da FGP.pdf`
        }
      ]
    },
    {
      date: '14 fevereiro 2026',
      title: 'Comissão eleitoral em ilegalidade',
      fact: [
        'A Dr.ª Maria Inês Morgado Monteiro Nabais que integra a comissão eleitoral, aparece numa das listas candidatas, em desconformidade com o disposto no artigo 38.º, n.º 3, doRegulamento Eleitoral',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Admissão definitiva das listas para as eleições dos órgãos sociais da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ofício 016_ Admissão definitiva listas.pdf`
        }
      ]
    },
    {
      date: '27 fevereiro 2026',
      title: 'Suspensão das Eleições de 28 de fevereiro de 2026',
      fact: [
        'O ato eleitoral foi suspenso pela FGP, na sequência da intervenção do IPDJ (Processo 74/DFA/2026), para clarificação do colégio eleitoral.',
        'O IPDJ, na sequência de várias denúncias, obrigou a FGP a clarificar o caderno eleitoral antes do ato eleitoral, não sendo da competência da MAG a decisão unilateral de exclusão de delegados, pelo que, se mantêm em funções até decisão contrária da AG.',
        'O ato eleitoral, já se encontrava em fase avançada (com receção de votos por correspondência em curso), pelo que, fica a dúvida sobre a localização dos votos recebidos e destino.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'IPDJ solicita esclarecimentos à FGP sobre o caderno eleitoral a 20 de fevereiro',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - OE_SC_DFA_00462026.pdf`
        },
        {
          label: 'FGP responde ao IPDJ a 25 de fevereiro',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - REM250220261854 - IPDJ Processo 74_DFA_2026 - 25Fev26_merge.pdf`
        },
        {
          label: 'IPDJ confirma a necessidade de uma AG para clarificação das perdas de mandato a 26 de fevereiro',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - OE_SC_DFA_00492026.pdf`
        },
        {
          label: 'Despacho Suspensão das Eleições',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - DES2702261600- Despacho - 27Fev26.pdf`
        }
      ]
    },
    {
      date: '7 março 2026',
      title: 'Assembleia Geral Extraordinária 186para deliberação sobre a perda de mandato de delegados - REMARCADA',
      fact: [
        'A AG foi convocada para deliberar sobre a perda de mandato dos 5 delegados.',
        'A votação foi suspensa por múltiplas falhas técnicas no sistema eletrónico: duplicação de votos, discrepância entre o número de presentes e os votos contabilizados, e necessidade de repetição de votações.',
        'A Assembleia Geral foi remarcada por não se encontram reunidas as condições de segurança para a deliberação.',
        'Esta ata viria a ser aprovada na AG de 14 de abril, mas não foi divulgada a versão final com assinaturas, violando o art.º 14.º dos Estatutos da FGP e o art.º 3.º do REFGP.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Convocatória da AG para deliberação sobre a perda de mandato de delegados',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - CC0033 - Convocatória AG Extraordinária 7Mar26.pdf`
        },
        {
          label: 'Ata 186 - Assembleia Geral Extraordinária - 7Mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 186 - Assembleia Geral Extraordinária -  7Mar26 v3.pdf`
        }
      ]
    },
    {
      date: '18 março 2026',
      title: 'Atas e Registo presenças Delegados de 2025 e 2026',
      fact: [
        'Envio tardio e incompleto, nesta data, das atas e registos de presenças dos delegados, viola o dever de publicitação (art.º 14.º dos Estatutos da FGP) e o dever de transparência (art.º 3.º do REFGP).',
        'A ata 181 de Assembleias Geral realizada em 2024 nunca foi divulgada. Por outro lado, a ata 180 da AG de 24 de novembro, está publicada no site da FGP, mas não foi aprovada em AG nem tem folha de presenças dos delegados.',
        'As atas 182_29mar_25, 183_10_abr25, 184_10abr25, 185_13dez25 foram apenas divulgadas a 18 de março de 2026 e aprovadas a 23 de março de 2026. Contudo, até à presente data, nenhuma das atas aprovadas foi divulgada ou publicada após a respetiva aprovação.',
        'O quadro infra demonstra que, em cerca de 50% das Assembleias do ciclo, a informação relativa a faltas está omissa ou incompleta. Esta omissão condiciona a base legal pela qual a MAG afastou unilateralmente 5 delegados.',
        'Importa, também, referir que os 5 delegados visados apresentaram justificações de faltas, que não foram consideradas pela MAG em comparação com outros delegados.',
      ],
      tone: 'negative',
      image: 'registo falta de delegados vs registo ata.png',
      imageCaption: 'Figura — Registo delegados de 9 de março - Vermelho: informação não divulgada; Amarelo: informação incompleta sobre as faltas dos delegados por inerência; Verde: informação completa.',
      documents: [
        {
          label: 'Ata 182 - Assembleia Geral Ordinária - 29Mar25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 182 - Assembleia Geral Ordinária - 29Mar25.pdf`
        },
        {
          label: 'Ata 183 - Assembleia Geral Extraordinária - 10Abr25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 183 - Assembleia Geral Extraordinária - 10Abr25.pdf`
        },
        {
          label: 'Ata 184 - Assembleia Geral Extraordinária - 10Abr25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 184 - Assembleia Geral Extraordinária - 10Abr25.pdf`
        },
        {
          label: 'Ata 185 - Assembleia Geral Extraordinária - 13Dez25',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 185 - Assembleia Geral Extraordinária - 13Dez25.pdf`
        },
        {
          label: 'Registo presenças Delegados de 2025 e 2026 v9mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Registo Delegados AG FGP v9Mar26.pdf`
        }
      ]
    },
    {
      date: '23 março 2026',
      title: 'Assembleia Geral Extraordinária 186 para deliberação sobre a perda de mandato de delegados - Continuação',
      fact: [
        'Apesar de na AG de 7 de março a MAG ter permitido que os 5 delegados visados se pronunciassem e justificassem as faltas, a MAG introduziu a expressão "faltas injustificadas" nos pontos de votação, limitando a decisão da AG e violando o art.º 32.º dos Estatutos da FGP que não refere faltas injustificadas, mas apenas faltas.',
        'Foi deliberado nesta AG, por escrutínio secreto, não afastar os 5 delegados visados, mantendo-se o mandato dos mesmos, em conformidade com os Estatutos da FGP.',
        'Esta ata viria a ser aprovada na AG de 14 de abril, mas não foi divulgada a versão final com assinaturas, violando o art.º 14.º dos Estatutos da FGP e o art.º 3.º do REFGP.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Convocatória AG para continuação da deliberação sobre a perda de mandato de delegados',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória AG Extraordinária de 23Mar26_merge.pdf`
        },
        {
          label: 'Resultados da votação da continuação dos mandatos',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - 20260323_220552_poll_results_Ponto_unico_Votacao_da_deliberacao_sobre_as_perdas_de_mandato_de_Delegados_a_Assembleia_Geral_da_FGP.pdf`
        },
        {
          label: 'Ata 186 continuação - Assembleia Geral Extraordinária - 23Mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 186 continuação - Assembleia Geral Extraordinária - 23Mar26 v3.pdf`
        }
      ]
    },
    {
      date: '26 março 2026',
      title: 'Oficio IPDJ - Risco de perda da Utilidade Pública Desportiva da FGP',
      fact: [
        'Nesta data, após expostos por um delegado relativamente à omissão do ofício a baixo datado de 16 de março, a FGP viu-se obrigada a partilhar os documentos a baixo.',
        'Neste ofício, após a clarificação do caderno eleitoral, o IPDJ solicita que, no prazo máximo de 30 dias, a FGP remeta cópia da ata da tomada de posse da lista vencedora do novo ato de eleições.',
        'Sendo certo que a não receção de tal documento no prazo fixado poderá acarretar a suspensão da Utilidade Pública Desportiva da FGP',
        'Em resposta, a FGP defende que precisa clarificar a correta composição do colégio eleitoral, para marcação de eleições, que seria votada nesse mesmo dia na AG, e ignora a indicação do TAD em realizar eleições com os mesmo delegados eleitos de 2024.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Ofício do IPDJ a 16 de março de 2026',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - OE_SC_DFA_00602026.pdf`
        },
        {
          label: 'Resposta da FGP ao IPDJ a 23 de março de 2026',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - REM230320261416 - IPDJ Processo 74_DFA_2026 - 23Mar26.pdf`
        }
      ]
    },
    {
      date: '27 março 2026',
      title: 'Requerimento para AG Extraórdinária',
      fact: [
        'Requerimento ao abrigo do art.º 47.º n.º 3 dos Estatutos para convocação urgente de AGE até 06/04/2026, incluindo com 1º ponto: a apreciação e deliberação da destituição da MAG.',
        'NOTA: Esta AG nunca chegou a ser convocada pela MAG nos termos e prazos legais do requerimento.'
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Requerimento para AG Extraórdinária',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Requerimento_Convocatoria_AGE_FGP_27mar2026__signed 2.pdf`
        },
        {
          label: 'Resposta MAG que viola o art.º 47.º n.º 3 dos Estatutos da FGP',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - OF190420262217 - Requerimento Convocatória AGE.pdf`
        }
      ]
    },
    {
      date: '31 março 2026',
      title: 'Assembleia Geral Ordinária 187',
      fact: [
        'Sessão ordinária em cuja Ordem de Trabalhos constava a apreciação de atas de AG anteriores. A ata da AGE n.º 186 não foi nessa sessão submetida a votação uma vez que tinha claras omissões em relação ao desenrolar do ato, ficando a sua aprovação diferida para sessão a agendar.',
        'Desta sessão, fazia também parte a apreciação e votação do relatório de contas de 2025, que foi reprovado. Na grande maioria devido ao parecer negativo do Conselho Fiscal, que demonstrou a sua insatisfação pelo facto que a Direção da FGP não ter proporcionado todos os documentos contabilísticos detalhados que lhes permitisse fazer uma análise válida das contas.',
        'Esta ata viria a ser aprovada na AG de 14 de abril, mas não foi divulgada a versão final com assinaturas, violando o art.º 14.º dos Estatutos da FGP e o art.º 3.º do REFGP.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Convocatória Assembleia Geral Ordinária 31Mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória Assembleia Geral Ordinária 31Mar26.pdf`
        },
        {
          label: 'Parecer negativo concelho fiscal sobre o relatório de contas de 2025',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Parecer_CF_RAC_2025_31_Marco_26.pdf`
        },
        {
          label: 'Ata 187 - Assembleia Geral Ordinária - 31Mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 187 - Assembleia Geral Ordinária - 31Mar26.pdf`
        }
      ]
    },
    {
      date: '14 abril 2026',
      title: 'Assembleia Geral Extraórdinária 188',
      fact: [
        'Formalmente aprovada a ata da AGE n.º 186 (sessão de 07/03 e continuação a 23/03). A aprovação consolida institucionalmente a deliberação de 23/03/2026, segundo a qual a Assembleia, por escrutínio secreto, votou contra a perda de mandato dos 5 delegados visados.',
        'Igualmente, esta deliberação, foi refletida pela Direção da FGP no relatório de atividades e contas de 2025 aprovado nesta sessão, que cita “Deliberou a AG, através de votos contra em maioria, que os Delegados visados não perderam o mandato.”. Estando desta forma clarificado o colégio eleitoral.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Convocatória Assembleia Geral Extraordinária 14Abr26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória Assembleia Geral Extraordinária 14Abr26.pdf`
        },
        {
          label: 'Relatório e contas 2025 aprovado',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória Assembleia Geral Ordinária 31Mar26.pdf`
        },
        {
          label: 'Convocatória Assembleia Geral Ordinária 31Mar26',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Convocatória Assembleia Geral Ordinária 31Mar26.pdf`
        },
        {
          label: 'Ata 188 - Assembleia Geral Ordinária - 14Abr26 (por aprovar)',
          source: 'FGP',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Ata 188 - Assembleia Geral Ordinária - 14Abr26.pdf`
        }
      ]
    },
    {
      date: '27 maio 2026',
      title: 'Oficio IPDJ - Extensão 30 dias - Risco de perda da Utilidade Pública Desportiva da FGP',
      fact: [
        'Nesta data, e novamente por exposição de um delegado, sem que tenha FGP informado naturalmente os seus delegados, são expostos os documentos a baixo.',
        'A 17 de abril, após deliberação da AG para manutenção dos mandatos dos 5 delegados, decisão expressa no Relatório de Contas aprovado e ata igualmente aprovada sem votos contra, a Direção da FGP solicita 90 dias de extensão do solicitado no ofício de 16 de março por achar que ata da AG de 23 de março pode desencadear reações legais que não garantem a estabilidade institucional para marcação de Eleições',
        'A 5 de maio o IPDJ responde que a justificação apresentada não é suficiente para a extensão do prazo, mas concede 30 dias de extensão, estando em risco a FGP de perder a Utilidade Pública Desportiva.',
        'A 18 de maio a FGP volta a descrever uma instabilidade para marcação de eleições devido ao recurso no TCAS e pelas deliberações da AG 186 que podem ser "suscetíveis de reação contenciosa".',
        'Neste último ofício a FGP indica ter conhecimento de uma reclamação de 7 delegados datada de 20 de abril.',
        'Nesse mesmo dia, 18 de maio, o IPDJ responde não pode pronunciar-se sobre o conteúdo da reclamação de 20 de abril, que é julgada improcedente, por visar sobre um diligência que não é suscetível de reclamação.',
      ],
      tone: 'negative',
      documents: [
        {
          label: 'Ofício FGP p/ IPDJ a 17 de abril de 2026',
          source: 'IPDJ',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Oficio FGP 17 abril 2026.pdf`
        },
        {
          label: 'Resposta do IPDJ à FGP a 5 de maio de 2026',
          source: 'IPDJ',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Oficio IPDJ 5 maio 2026.pdf`
        },
        {
          label: 'Ofício FGP p/ IPDJ a 18 de maio de 2026',
          source: 'IPDJ',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - Oficio FGP 18 maio 2026.pdf`
        },
        {
          label: 'Reclamação de 7 delegados datada de 20 de abril e Resposta IPDJ a 18 de maio de 2026',
          source: 'IPDJ',
          url: `${process.env.PUBLIC_URL}/documents/FGP - 2026 - 7 Delegados 20 abril_ resporta IPDJ 18 maio.pdf`
        }
      ]
    },
    {
      date: '16 junho 2026',
      title: 'FGP não cumpre pela segunda vez o prazo de 30 dias do IPDJ',
      fact: [
        'Neste dia a FGP entra novamente em risco de perda da Utilidade Pública Desportiva, por não ter cumprido o prazo de 30 dias do ofício do IPDJ de 5 de maio de 2026, que solicitava a remessa da ata da tomada de posse da lista vencedora do novo ato de eleições.',
      ],
      tone: 'negative',
    },
    {
      date: '24 junho 2026',
      title: 'As Associações de Ginástica de Leiria e do Centro submetem uma ação judicial contra a FGP',
      fact: [
        'No dia 24 de junho de 2026, as Associações de Ginástica do Centro e do Distrito de Leiria submetem uma ação judicial contra a FGP, destinada a impugnar as deliberações tomadas pela Assembleia Geral de 23 de março de 2026.',
        'Neste processo são indicados como contra-interessados os 5 delegados visados em março, para apresentação de contestação senão as deliberações da AG de 23 de março de 2026 podem ser anuladas.',
      ],
      tone: 'negative',
    },
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

