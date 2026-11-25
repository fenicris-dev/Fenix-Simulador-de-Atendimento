# PROMPT MESTRE — Fênix | Simulado de Atendimento (v1.4)

Gerador de Apps Fênix (`fenix-criador-de-apps`) — Entrega Final (5/5), 20/11/2026; atualizado em 24/11/2026 (v1.4, reflete o app até a v2.2).
Modo: CRIAÇÃO ou RECONSTRUÇÃO. Construir (ou reconstruir) o app a partir deste documento. Não pedir de novo o que já está aqui; se faltar UM detalhe decisivo, fazer UMA única pergunta objetiva.

Histórico: a ideia nasceu como simulado de uma concessionária de energia real. Para não comprometer a Fênix nem ferir direitos de terceiros, o nome de empresa real foi removido do produto (seção 1).

---

## 0. Identificação

- **Nome:** Fênix | Simulado de Atendimento
- **Tipo:** sistema web (PWA), Web + Mobile
- **Versão:** o app nasceu na 1.0 e este prompt descreve o estado da **v1.9** (nunca pular versões, só uma casa decimal: 1.9 → 2.0 → 2.1; nunca x.x.x)
- **Funcionalidade:** treinar aspirantes e atendentes de call center com simulação de chamada por voz, 8 passos fixos, cronômetros, personas de clientes, avaliação automática, gamificação e métricas.
- **Arquivos de saída:** `fenix-simulado-de-atendimento-vX.X.html` (com versão) e `index.html` (cópia idêntica, sem versão), `sw.js`, os 4 ícones, manual em MD e PDF, changelog, `LEIAME.txt`, as pastas `roteiros-pdf-vX.X/` (130 PDFs avulsos) e `roteiros-referencia-vX.X/` (JSON dos 130 roteiros) e o `.zip` com tudo. As pastas de roteiros não vão para o GitHub e por isso mantêm a versão no nome. No GitHub vão só `index.html`, `sw.js`, os 4 ícones e o PDF do manual.
- **Core:** Fênix Core c 6.2 (mínimo aceito 5.8), carregado da URL única `https://fenicris-dev.github.io/Fenix-Core/fenix-core.js`. **Não alterar o core.** Ranking e voz ficam como motores internos do app; viram módulos do core numa fase posterior.
- **Selo:** `v1.9 | c 6.2` ao lado da versão e na tela Sobre, e selo do Livro das Regras aplicado (base: Livro v6.2; conferir se existe versão mais nova antes de entregar). O selo reflete a versão do core/livro lida; o app não altera o core.

## 1. Marca e neutralidade jurídica (regra central deste app)

1. O app **nunca** usa nome, logo, cores, script ou dados de empresa real como padrão. Nenhum roteiro, persona, cenário ou texto de fábrica cita empresa de terceiros.
2. Existe a variável `{EMPRESA}`. **Padrão: "Fênix".** Na abertura da chamada o atendente fala "Atendimento {EMPRESA}", ou seja, "Atendimento Fênix".
3. O aluno pode trocar `{EMPRESA}` no onboarding ou em Configurações. **Campo em branco = assume "Fênix".**
4. Ao trocar, mostrar aviso claro e **fixo** (não dispensável) ao lado do campo e no rodapé do simulador:
   > "Nome digitado por você, apenas para treino. Este app não tem vínculo, patrocínio ou aprovação da empresa citada, e não usa logo ou materiais oficiais dela. O uso do nome é de sua responsabilidade."
5. O nome digitado fica no aparelho/perfil do aluno; nunca entra em roteiros oficiais, no ranking nem em relatórios compartilhados, a não ser como texto do próprio aluno.
6. Os cenários de fábrica usam setor genérico (serviço de energia e outros), com "unidade consumidora", "protocolo" e termos comuns de mercado, sem referência a empresa real.
7. Dados de exemplo (nomes, endereços, telefones, protocolos) são fictícios e coerentes entre si.

## 2. Regras do Livro (Ficha de aplicação)

**Essenciais:**
- Identidade visual oficial: degradê `#040798` → `#0076CE` no menu e no rodapé, botões Azul Dell `#0076CE`, destaques e alertas `#ffcb00`, fundo `#F3F4F9`, cards brancos, texto `#020733`, ícones lineares, seções colapsáveis fechadas por padrão.
- Águia Fênix branca como logo (embutida em base64); ícone provisório da águia até o oficial; splash azul com barra de vai e vem e toque de abertura "Asas".
- Rodapé: `{ANO dinâmico} <Cristiano Fênix/> | © Fênix Soluções Tecnológicas` (WhatsApp e Instagram oficiais) + versão do app.
- Valores monetários ABNT, datas dd/mm/aaaa, toque mínimo 44 px, layout testado em 360 px e sem internet.
- Mensagens em português claro; padrão único de carregando/vazio/erro.
- Dashboard clicável: todo indicador com contagem abre a lista filtrada.
- Navegação mobile: barra de abas fixa embaixo com **Iniciar chamada** como ícone central destacado; desktop com menu lateral + cards.
- Confirmação antes de sair de qualquer tela (principalmente durante a chamada); ações destrutivas exigem digitar "APAGAR".
- Texto digitado pelo usuário é exibido como texto, nunca injetado como código.
- Versão do esquema nos registros; backup exportar/importar; indicador discreto de conexão; avatar com iniciais, com Ajuda e Sair.

**Acesso:**
- Login por e-mail; botão Google só com licença definitiva. Sem PIN.
- Onboarding: primeiro nome, e-mail e CNPJ (se tiver, preenche razão social e endereço pela BrasilAPI). Sem CPF. O primeiro nome vira o **nome do atendente** na chamada.
- Teste integral de 15 dias; depois, sem licença, só visualização (sem criar roteiros nem simulações). Faixa de aviso automática pelo core.
- Primeiro acesso: perguntar se guarda os dados **só no aparelho (padrão)** ou **na nuvem**, avisando o risco de perda; mudar depois em Configurações.
- Offline: abre sem internet; tenta reconectar a cada ~5 minutos.
- Tela Sobre com Changelog (data de criação e de modificação de cada versão); Manual do usuário em MD (dentro do app) e PDF (download), com prints e exemplo de cada botão e campo.
- Botão Compartilhar (WhatsApp, e-mail) e aviso "Compartilhe e ganhe" quando a campanha estiver ligada.
- Excluir minha conta e meus dados; preferências (som de fundo, toque, animações, tema escuro opcional).

## 3. Perfis

- **Aluno:** faz simulações, vê o próprio desempenho, níveis, badges e ranking.
- **Supervisor:** observa sessões ao vivo sem intervir, vê simulações e métricas dos alunos da empresa, cria roteiros oficiais.
- **Administrador:** gerencia membros e perfis, cenários oficiais e campanha.
- **Nick no ranking:** o aluno escolhe um **nick** (apelido). Avisar que ele pode usar o próprio nome, mas **recomendar o nick**. Colegas veem só nick e pontos.

## 4. Fluxo da simulação (8 passos fixos)

Falas do **A.** (atendente, o aluno) e do **C.** (cliente, gerado por voz). O aluno fala (reconhecimento de voz) ou digita; o app confere cada passo contra o checklist e o cliente responde em áudio.

1. **Abertura.** "Atendimento {EMPRESA}, [atendente], bom dia/boa tarde/boa noite (pela hora do aparelho), qual o seu nome, por favor?" Depois: "Senhor(a) [nome], no que posso ajudar?"; verificar se o problema é só na casa ou também na rua; pedir o código da unidade consumidora ou o CPF do titular.
2. **Gestão de pausa e confirmação positiva.** Pedir licença para consultar o cadastro e avisar que o sistema ficará mudo e que será **"o mais breve possível"** (o atendente nunca diz "20 segundos"; a pausa simulada continua sendo contada em tela). Voltar: "localizei os seus dados" e **citar só o nome da rua** ("O senhor reside na Rua X, correto?"). Em seguida **perguntar ao cliente**, um a um: número, bairro, cidade, **UF** e **ponto de referência**. O atendente não lê o endereço completo.
3. **Entrevista e testes.** Propor os testes, orientar a verificação (ex.: caixa de disjuntores, fio partido), aguardar o cliente (~10 s por verificação) e fazer as perguntas de esclarecimento.
4. **Protocolo e previsão.** Pedir telefone de contato (e um segundo, se houver); avisar nova pausa. O ponto de referência já foi pedido no passo 2.
5. **Gestão de pausa (10 s).** Gerar o protocolo, pedir que o cliente anote (cliente leva ~5 s), informar o protocolo e a previsão de atendimento do técnico.
6. **Algo mais?** "O senhor deseja algo mais?"
7. **Direcionamento da pesquisa.** Avisar do redirecionamento para a avaliação, pedir a nota com educação e informar a pesquisa por e-mail em até 48 h.
8. **Despedida.** Agradecimento e saudação final adequada ao horário.

Os 8 passos são mantidos em todo roteiro. O aluno pode criar roteiros próprios mantendo os 8 passos; o conteúdo de cada passo é editável.

## 5. Cronômetros

- **Cronômetro da etapa:** zera a cada passo e mostra a meta (editável por roteiro; padrão sugerido: Abertura 60 s, Confirmação 65 s (pausa + endereço), Entrevista 120 s, Protocolo 60 s, demais 20–30 s).
- **Cronômetro total:** corre do atendimento até a despedida e para junto com ela.
- Durante as pausas, o cronômetro vira contagem regressiva e o tempo conta como **TME**.
- Mostrar verde/amarelo/vermelho conforme a meta; tempos entram no relatório.

## 6. Áudio e voz

- **Toque de chamada** padrão de call center ao iniciar (gerado por Web Audio, sem arquivo externo).
- **Som de fundo** de pessoas conversando, em loop e baixo, durante toda a chamada (sintetizado no app, sem arquivos pesados); volume reduzido nas pausas; liga/desliga em Preferências.
- **Voz do cliente:** síntese de voz do navegador (pt-BR), **voz sorteada a cada chamada** entre as disponíveis, com ritmo e tom definidos pela persona. Sem vozes de pessoas reais.
- **Voz do aluno:** reconhecimento de fala do navegador; se não houver suporte, campo para digitar.
- Pedir o microfone só no início da simulação, com texto explicativo antes da permissão do navegador.
- **Pausas e "me chame":** na pausa o cliente fica em silêncio; o aluno pode "chamar" o cliente a qualquer momento.

## 7. Personas (fases de aprendizado)

Cada persona define: ritmo, tom, paciência (0–100), chance de interromper, de repetir, de desviar do roteiro, de ameaçar cancelar, vocabulário e dificuldade.

1. **Cliente calmo** (nível de entrada)
2. **Lento**
3. **Idoso confuso** (fala devagar, repete informações)
4. **Leigo** (não entende termos técnicos)
5. **Apressado** (quer resolver rápido)
6. **Chato** (questiona tudo)
7. **Nervoso**
8. **Irritado** (tom alto, ameaça cancelar)
9. **Deficiente auditivo** (pede para repetir; exige paciência e clareza)
10. **Empresarial** (linguagem formal, exige objetividade)
11. **Prolixo** (fala demais, foge do assunto)
12. **Exigente** (cita direitos, pede supervisor e registro por escrito)
13. **Cliente vital** (home care: depende de energia para equipamento de saúde; exige priorizar, levantar a autonomia da bateria e orientar o plano de contingência, incluindo o 192; libera a partir do nível Pleno)

## 8. Cenários de fábrica (setor genérico): 10 cenários × 13 personas = 130 roteiros

1. Falta de energia só na casa (cenário base)
2. Falta de energia na rua
3. Reclamação de conta alta
4. Solicitação de religação
5. Troca de titularidade
6. Segunda via de fatura
7. Negociação de débito
8. Elogio ou crítica
9. Oscilação de energia
10. Corte com a conta paga

(Os 10 cenários e os 130 roteiros vêm do pacote `fenix-roteiros-v1.1` + persona 13 `v1.2`, embutidos no app como `ROTEIROS["NN.PP"]`. Localidades e empresas dos roteiros são fictícias: cidade "Vale Azul", UF única "SE" definida numa constante do app, já que a UF não pode ser inventada, empresa padrão Fênix. Cada roteiro tem PDF avulso e JSON de referência.)

Cada cenário é um roteiro com os 8 passos, falas-modelo e gatilhos de desvio. Combinação cenário × persona gera as fases; um cenário pode ser jogado com qualquer persona liberada.

## 9. Avaliação, feedback e aprendizado

- **Pontuação por etapa (0–100 no total):** Abertura 15, Confirmação/identificação 15, Entrevista e testes 25, Protocolo e previsão 20, Pausas bem conduzidas 10, Pesquisa e despedida 10, Tempo dentro das metas 5 (pesos editáveis).
- **Checklist por passo** com itens obrigatórios e sinônimos (saudação, nome da empresa e do atendente, pedir o nome, confirmar dados, avisar a pausa, informar protocolo, oferecer ajuda extra, despedida).
- **Feedback em tempo real:** indicador discreto de passo cumprido ou item faltante.
- **Modos:** Treino guiado (mostra a fala-modelo), Treino sem ajuda, **Avaliação** (vale pontos) e Observação (supervisor).
- **Modo dica:** sugestões em tempo real, liga/desliga; usar dica reduz os pontos da rodada.
- **Banco de erros comuns:** catálogo (esquecer o nome do cliente, não avisar a pausa, falar gíria, interromper, não confirmar o protocolo...) que alimenta o feedback e o relatório.
- **Script flexível:** o cliente pode desviar (pergunta fora do roteiro, reclama, muda de assunto); o aluno deve voltar ao passo corretamente.
- **Relatório final** da simulação (tela e PDF com cabeçalho padrão): nota, tempos por etapa, erros, pontos fortes e fracos, recomendação do próximo treino.

## 10. Métricas de call center

TMA (tempo médio de atendimento), TME (tempo médio de espera, nas pausas), FCR (resolução no primeiro contato, simulada pelo cumprimento do roteiro), NPS (a partir da nota do cliente simulado) e **qualidade da escuta ativa** (confirmações, repetições corretas, uso do nome). Histórico e evolução por aluno e por empresa, com indicadores clicáveis.

## 11. Gamificação

- **Níveis:** Iniciante → Júnior → Pleno → Sênior → Especialista (por XP acumulado; limites iniciais 0 / 500 / 1.500 / 3.500 / 7.000, editáveis).
- **XP:** por simulação concluída, nota, sequência de dias e desafios.
- **Badges:** primeira chamada, nota 90+, sem usar dica, TMA dentro da meta, vencer uma persona difícil, 7 dias seguidos, todos os cenários jogados etc.
- **Ranking** por empresa (semanal, mensal, geral), mostrando **nick** e pontos.
- **Desbloqueio:** personas e cenários mais difíceis liberam por nível.

## 12. Modo supervisor

Observa a sessão ao vivo sem intervir (passo atual, cronômetros, checklist). O aluno vê a faixa fixa **"Supervisor observando"** durante toda a sessão, sem exceção. O supervisor também pode revisar simulações antigas e comentar.

## 13. Gravação

Gravação da simulação para revisão (áudio e linha do tempo). **Áudio fica somente no aparelho** (IndexedDB); a nuvem nunca recebe áudio. O aluno pode ouvir, exportar e apagar (confirmação com "APAGAR").

## 14. Dados (Fênix Core + Firestore)

Coleções propostas (validar no Painel da biblioteca antes de publicar as regras):
`membros`, `roteiros` (oficiais em leitura para todos, do aluno só dele), `simulacoes` (pontuação, tempos, métricas, erros, feedback; sem áudio), `ranking` (agregado por empresa, com validação de pontos), `conquistas`, `supervisao` (sessão ao vivo).
Regras: aluno lê/grava só as próprias simulações; supervisor lê as da própria empresa sem gravar; `empresas/{id}` só para dono e membros; nada fora dessa lista. Com armazenamento só no aparelho, tudo fica local e o ranking aparece só para o próprio aluno.

## 15. Políticas & Legal

Usar os Termos de Uso e a Política de Privacidade oficiais do Fenix-Core (linkados no login e no onboarding). Acrescentar um bloco "Simulado de Atendimento" (somente acréscimo, sem remover nada; a data "Atualizado em" muda porque o texto muda):
1. Simulador de treinamento; cenários, falas e personas fictícios; não é canal oficial de atendimento de nenhuma empresa.
2. Nome de empresa digitado pelo aluno é de responsabilidade dele; sem vínculo com a empresa citada; padrão do app é "Fênix".
3. Microfone: permissão só durante a simulação; gravações só no aparelho; o aluno pode apagá-las.
4. O que vai para a nuvem quando o aluno escolhe a nuvem: pontuação, tempos, métricas, nível, conquistas e posição no ranking; áudio nunca.
5. Quem vê o quê: supervisor e administrador veem simulações e métricas da empresa; colegas veem nick e pontos; aviso fixo quando o supervisor observa.
6. Escolha do local de guardar os dados e o risco de perda ao limpar dados do navegador ou formatar o aparelho.
7. Teste de 15 dias e licença.
8. Direitos do usuário: excluir conta e dados, exportar backup, apagar gravações.
9. Vozes dos clientes são sintéticas.
Texto sem revisão de advogado (responsabilidade assumida pelo Cristiano; revisão de ~5 dias pendente). Encarregado de privacidade e e-mail vêm do `FenixCore.EMPRESA`.

## 16. Entrega e testes

- Entregar: `fenix-simulado-de-atendimento-vX.X.html`, `index.html` (cópia neutra), Manual (MD e PDF), Changelog, `LEIAME.txt` e o `.zip` com tudo. Informar a versão no texto da resposta. Fechar com a linha **"Conferência de entrega"** (arquivos com versão, cópia neutra, zip, manual, changelog, LEIAME).
- Antes de entregar: `node --check` com saída 0, chaves balanceadas, varredura de versões antigas, teste em 360 px e sem internet, teste de fumaça (abrir, onboarding, uma simulação completa de 8 passos, relatório), teste com dois aparelhos (ranking e supervisor), conferência de que nenhum nome de empresa real aparece no produto.
- Lembrete de armadilhas: handlers inline exigem `var`/`function`; cuidado com template literals ao gerar por script.
- Quando houver pacote da biblioteca, incluir o Guia da biblioteca atualizado (md e docx, duas cópias) e o `.zip`.

## 17. Recursos acrescentados depois da v1.0 (estado da v1.8)

1. **Roteiros de fábrica dentro do app** (130). "Ver roteiro" e botão **Baixar PDF** em cada um (jsPDF no navegador; cabeçalho com a logo oficial). No treino guiado o motor segue o roteiro da combinação: o checklist só cobra o que o roteiro pede e o cliente responde com as falas do roteiro.
2. **Regra do passo 2** (seção 4): só a rua é citada pelo atendente; número, bairro, cidade, UF e ponto de referência são perguntados ao cliente; pausa dita como "o mais breve possível".
3. **Aprender:** (a) **Chamada Modelo** (cenário 1): o sistema faz os dois lados, com a persona escolhida, e o aluno observa; (b) **Troca de Lugar** (cenário 2): o aluno é o cliente, o sistema atende e o aluno aponta as falhas do atendente na avaliação; (c) **Duelo de alunos** (cenário 3, ver item 6).
4. **Persona Vital** com avaliação própria: erros "Não tratou como prioridade" e "Não orientou sobre o 192"; o aluno é avaliado em identificar a dependência, priorizar, levantar a autonomia e orientar o plano de contingência.
5. **Acesso no padrão 6.1** (splash, login, onboarding): fiéis aos templates oficiais `fenix-template-splash/login/onboarding-v6.1`. Abas Entrar / Criar conta / Esqueceu a senha; e-mail e senha (a senha fica só no aparelho, em hash SHA-256 com sal; perfis antigos definem a senha no primeiro acesso); farol de fundo; chave **Som de abertura** (toque "Asas"); botão Google só com licença definitiva; primeiros passos com nome, e-mail e CNPJ opcional (BrasilAPI) e CEP (ViaCEP). Logo e ícone oficiais (águia) no menu, splash, login, onboarding, Sobre, PDFs e ícones do PWA.
6. **Duelo de alunos, engatilhado:** dois aparelhos, um atende (A) e outro é o cliente (C), com o mesmo roteiro. Fica **desligado** (`DUELO_CFG.ativo=false`) até existir a nuvem. Dados no Firestore pelo Fênix Core, coleção `duelos` (sala: código, roteiro, persona, anfitrião, estado, criadoEm, expiraEm de 24 h) e subcoleção `turnos` (n, papel, texto, t); só texto e nota final, **nunca áudio**; acesso só a quem tem o código; regras do Firestore sugeridas no documento `duelo-firebase-vX.X.md`. Liga quando: flag ligada + nuvem escolhida + core com Firebase ativo + adaptador implementado. A tela mostra "Em breve" e o motivo.
7. **Aviso de apoio ao estudo** (Livro regra 79): "O app é uma ferramenta de apoio ao estudo e não garante aprovação em provas ou concursos." no primeiro acesso e a cada 7 dias, não desativável, não aparece durante a chamada; o mesmo texto na tela Sobre.
8. **Legal:** Termos de Uso e Política de Privacidade oficiais (v5.8, atualizados em 09/11/2026), linkados em login, onboarding e Sobre, mais o bloco "Simulado de Atendimento" (somente acréscimo). Revisão jurídica pendente (responsabilidade assumida pelo Cristiano).
9. **Livro 6.2:** selo `v | c`, botão Compartilhar, onde guardar os dados (aparelho por padrão), saída protegida, excluir conta, acessibilidade, teste de fumaça e Conferência de entrega.
10. **Nuvem (Firebase via Fênix Core):** ponte "Nuvem" por detecção de função (`salvarDoc`, `listarDocs`, `excluirMinhaConta`, `entrarComGoogle`, `criarModuloAuth`, `pessoas.buscarNaReceita`/`consultarCNPJ`, `localidades.buscarPorCEP`). Ao ligar o Firebase, conferir os nomes reais no core e ajustar a ponte.
11. **Supervisor entre abas:** observação ao vivo por `BroadcastChannel` no mesmo aparelho; entre aparelhos depende da nuvem (coleção `supervisao`).

12. **Modo escuta:** em Aprender, escolha cenário e persona e ouça o atendimento completo (8 passos, sem parar). O intervalo entre as falas segue a persona (apressado e nervoso respondem logo; lento, idoso e surdo demoram) e a voz do cliente usa o ritmo e o tom da persona. Controles: pausar, voltar e avançar fala, pular de passo, velocidade, ler sem som, fala atual destacada. Também há "Ouvir este roteiro" dentro de cada roteiro.
13. **Revisão e sugestões:** botão ✎ em cada fala dos roteiros (e no Modo escuta) abre "Sugerir alteração" (tipo + texto). Tudo fica no aparelho, em lista, com marcar como resolvida, apagar e exportar em .md e .json para enviar ao desenvolvedor.
14. **Discordo desta avaliação:** no relatório, por erro apontado, por item do checklist e geral. Guarda motivo e as falas do aluno naquela chamada, para calibrar o checklist. Mesma lista e exportação da Revisão.
15. **Vital, perguntas obrigatórias (roteiros e avaliação):** a que horas a energia faltou (cenários de falta, oscilação e corte), qual o equipamento do paciente, qual a autonomia da bateria (e reserva) e orientar ligar imediatamente para o 192 (SAMU). Erros: "Não perguntou quando a energia faltou", "Não levantou o equipamento e a autonomia", "Não orientou sobre o 192".

16. **Modo prova:** quarto modo ao iniciar a chamada (além de Treino guiado, Treino sem ajuda e Avaliação). Vale pontos e XP como a Avaliação, mas sem dicas, sem repetir na hora e uma vez por dia em cada cenário e persona. Relatório mostra "Prova registrada" no lugar de "Repetir o cenário"; o Histórico tem filtro "Provas".
17. **Exportar CSV:** planilha das simulações (UTF-8 com BOM, abre no Excel) no Desempenho e na Supervisão.
18. **Erros mais comuns:** aba da Supervisão com os erros que mais se repetem, roteiros de menor nota média, erro mais comum de cada roteiro e número de discordâncias; exporta em CSV.

19. **Voz gravada do cliente:** tela Mais > Voz gravada. Grava (MediaRecorder) ou importa a fala do cliente de qualquer roteiro; fica no IndexedDB (store `vozes`, chave = hash do texto normalizado), só no aparelho. `Voz.falar` toca a gravação (reconhece também a fala com prefixo/sufixo de estilo da persona) e cai para a voz sintética se não houver. Importa áudios soltos pelo nome `NN.PP_pX_fY`, exporta e importa pacote `.fenixvoz`, gera guia de gravação (.md) por roteiro. Interruptor "Usar voz gravada quando existir". O app não clona voz.
20. **Treino recomendado (Início):** do erro mais frequente das últimas 12 chamadas com roteiro, sugere o roteiro e o botão Treinar agora / Ouvir antes.
21. **Nota mínima da prova:** definida por supervisor/admin em Configurações (padrão 70, de 1 a 100); cada simulação guarda `notaMin`. Relatório mostra Aprovado(a) ou Abaixo da nota mínima; prova aprovada gera certificado em PDF (jsPDF, interno, sem valor oficial). CSV com colunas Nota mínima e Aprovado.
22. **Aviso de versão nova** (Atualizar / Depois, pelo service worker) e **lembrete de backup** a cada 15 dias (adiável por 3 dias).
23. **Ranking e supervisor entre aparelhos:** ponte pronta (`Nuvem.salvar/listar`), desligada até o Firebase; modelo de dados e regras no guia ranking-supervisor-firebase.

## 18. Fora do escopo (fase seguinte)

Módulo de ranking/gamificação e módulo de voz no Fênix Core (aprovados em ideia); ligar o Duelo e o ranking/supervisor entre aparelhos quando o Firebase estiver ativo; voz gravada nos roteiros-chave (a voz sintética não transmite emoção; o plano é o Cristiano gravar ou autorizar gravações das falas do cliente dos roteiros-chave, que o app tocaria no lugar da voz sintética, com a sintética como reserva); IA generativa para diálogo livre; integração com sistemas externos.

## 19. Histórico do prompt

- **v1.0** (20/11/2026): criação do app (8 passos, personas 1 a 10, 8 cenários).
- **v1.1** (23/11/2026): 130 roteiros (10 cenários × 13 personas), Aprender (Chamada Modelo, Troca de Lugar, Duelo engatilhado), persona Vital, acesso no padrão 6.1, logo oficial, legal v5.8, Livro/Core 6.2, regra do passo 2 e aviso de estudo.
- **v1.2** (24/11/2026): Modo escuta, Revisão e sugestões, Discordo desta avaliação e perguntas obrigatórias do Vital (hora, equipamento, autonomia, 192).
- **v1.3** (24/11/2026): Modo prova, exportar CSV, aba Erros mais comuns na Supervisão, teste de fumaça e acessibilidade em 360 px.
- **v1.4** (25/11/2026): voz gravada (estrutura), treino recomendado, nota mínima da prova com certificado, aviso de atualização, lembrete de backup e guia do Firebase para ranking/supervisor.
- (25/11/2026, v2.2 do app, sem mudar o prompt): Chamada Modelo e Modo escuta com rolagem que acompanha o passo, aviso "Passo N concluído. Próximo: Passo N+1" (o passo a passo nunca avança sozinho) e controles fixos embaixo.
