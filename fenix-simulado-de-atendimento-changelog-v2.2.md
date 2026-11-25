# Changelog — Fênix | Simulado de Atendimento

## Versão 2.2
Criada em 25/11/2026 · modificada em 25/11/2026

- Chamada Modelo e Modo escuta: a tela agora acompanha o atendimento. Ao trocar de passo ela volta ao topo do passo novo e, ao fim do passo, mostra o aviso "Passo N concluído. Próximo: Passo N+1" com o botão Ir para o Passo N+1 (sem avançar sozinho no modo passo a passo). Os botões Pausar, Continuar e Próxima fala ficam fixos na parte de baixo enquanto o passo toca.

## Versão 2.1
Criada em 25/11/2026 · modificada em 25/11/2026

- Voz gravada: grave ou importe a fala do cliente de qualquer roteiro (Mais > Voz gravada). O app toca a gravação no lugar da voz sintética na chamada, no Modo escuta e na Chamada Modelo, e volta à voz sintética onde não houver. Importa áudios soltos pelo nome do arquivo, exporta e importa pacote de vozes e gera o guia de gravação (.md) de cada roteiro.
- Treino recomendado na tela Início: o app olha o erro mais frequente das suas últimas chamadas e sugere o roteiro para treinar, com botão Treinar agora.
- Prova com nota mínima de aprovação definida pelo supervisor (Configurações). Mostra Aprovado ou Abaixo da nota mínima, e gera certificado em PDF para prova aprovada. O CSV ganhou as colunas Nota mínima e Aprovado.
- Aviso de versão nova do app (Atualizar / Depois) e lembrete de backup a cada 15 dias.
- Guia do Firebase para ranking e supervisor entre aparelhos (modelo de dados e regras).

## Versão 2.0
Criada em 24/11/2026 · modificada em 24/11/2026

- Modo prova: quarto modo ao iniciar a chamada. Vale pontos e XP como a Avaliação, mas sem dicas, sem repetir na hora e uma vez por dia em cada cenário e persona. Aparece no histórico com filtro próprio.
- Exportar planilha (CSV) das simulações, no Desempenho e na Supervisão (abre direto no Excel).
- Supervisão, aba Erros mais comuns: os erros que mais se repetem, os roteiros com menor nota média, o erro mais comum de cada um e quantas discordâncias existem; exporta em CSV.
- Teste de fumaça completo e revisão de acessibilidade em 360 px (ver LEIAME).
- Manual com prints novos: Modo escuta, Sugerir alteração, Revisão, Modo prova, Discordo e Erros mais comuns.

## Versão 1.9
Criada em 24/11/2026 · modificada em 24/11/2026

- Modo escuta: ouvir o atendimento completo (8 passos, sem parar) de qualquer cenário e persona, com o ritmo de cada persona entre as falas e a voz do cliente ajustada à persona. Botão também dentro de cada roteiro.
- Revisão e sugestões: botão ✎ em cada fala dos roteiros (e no Modo escuta) para sugerir alteração; lista com exportar em .md e .json.
- Discordo desta avaliação: no relatório, por erro, por item do checklist ou geral; guarda o motivo e o que o aluno falou, para calibrar a avaliação.
- Persona Vital nos 10 roteiros: perguntas de a que horas a energia faltou (cenários de falta, oscilação e corte), equipamento e autonomia da bateria separadas, mais a orientação de ligar já para o 192 (SAMU). Dois erros novos no relatório e na Troca de Lugar.
- Correção: a avaliação reconhece também "priorizar" e "prioridade", e não só "prioritário".

## Versão 1.8
Criada em 23/11/2026 · modificada em 23/11/2026

- Roteiros v1.3, regra do passo 2: o atendente cita só o nome da rua e pergunta ao cliente o número, o bairro, a cidade, a UF e o ponto de referência; o aviso de pausa passa a dizer "o mais breve possível" em vez de "20 segundos". Vale para os 130 roteiros, o checklist, a chamada livre e os PDFs.
- Alinhado ao Livro das Regras e ao Fênix Core 6.2: selo v1.8 | c 6.2, aviso de apoio ao estudo (regra 79), botão Compartilhar, escolha de onde guardar os dados e Termos de Uso e Política de Privacidade v5.8 (09/11/2026).
- Duelo de alunos engatilhado: estrutura pronta para o Firebase (coleção duelos, adaptador e regras sugeridas), desligada até a nuvem da Fênix estar ativa. Nada muda no uso hoje.
- Prompt mestre v1.1 atualizado (130 roteiros, Aprender, persona Vital, acesso 6.1, passo 2, Duelo e nuvem).

## Versão 1.7
Criada em 22/11/2026 · modificada em 22/11/2026

- Abertura (splash) no padrão Fênix 6.1: ícone do app, nome, barrinha de vai e vem e dois holofotes; fecha assim que a tela está pronta (teto de 1,2 s).
- Acesso no padrão Fênix 6.1: abas Entrar e Criar conta, Esqueceu a senha, e-mail e senha com olho e indicador de força, farol de fundo, chave Som de abertura e botão do Google só com licença definitiva.
- O login passa a usar e-mail e senha (como dizem os Termos de Uso). A senha fica só no aparelho, em hash. Quem já tinha cadastro define a senha no primeiro acesso.
- Primeiros passos no padrão Fênix 6.1: consulta de CNPJ e CEP com bloco da empresa editável, tela Tudo pronto e botão Entrar no app; mantidos nick, empresa do treino e onde guardar os dados.
- Logo oficial branca (águia) no cabeçalho dessas telas; prints do manual refeitos.

## Versão 1.6
Criada em 22/11/2026 · modificada em 22/11/2026

- Logo oficial da Fênix (águia) aplicada no menu, na abertura, no login, no onboarding, em Sobre e no cabeçalho dos PDFs (relatório e roteiros).
- Termos de Uso e Política de Privacidade oficiais (versão 4.9, de 27/10/2026) com os links reais no login, no onboarding, em Sobre e no bloco legal.
- Bloco legal do Simulado atualizado: controlador, encarregado, uso profissional (18+) e foro de Aracaju/SE.

## Versão 1.5
Criada em 22/11/2026 · modificada em 22/11/2026

- Nova persona 13, Cliente vital (home care, dependente de energia), nos 10 cenários: passam a ser 130 roteiros (10 cenários × 13 personas). Libera a partir do nível Pleno.
- Avaliação da persona Vital: dois erros novos no banco de erros, "Não tratou como prioridade" e "Não orientou sobre o 192", e o aluno é avaliado em identificar a dependência, priorizar, levantar a autonomia e orientar o plano de contingência.
- Chamada Modelo e Troca de Lugar com a persona Vital: o atendente com falhas deixa de priorizar e de orientar o 192, e o aluno-cliente aponta essas falhas na avaliação.
- Localidades dos novos roteiros trocadas por nomes fictícios, como nos demais. PDF avulso de cada um dos 130 roteiros no pacote.

## Versão 1.4
Criada em 21/11/2026 · modificada em 21/11/2026

- Cada roteiro ganhou o botão "Baixar PDF" (A4, com cabeçalho e rodapé Fênix, perfil do cliente, erros comuns, o que o avaliador observa e as falas dos 8 passos), além do "Baixar .md".
- Ícone oficial do Simulador de Atendimento aplicado ao app: tela de abertura, cadastro, login, Sobre, ícone da aba do navegador e ícone de instalação (Android, iPhone e computador, inclusive em formato adaptável).
- Manifesto do app passa a usar endereços absolutos para o início e o escopo, para a instalação funcionar em qualquer pasta do GitHub Pages.

## Versão 1.2
Criada em 21/11/2026 · modificada em 21/11/2026

- Nova área "Aprender" no menu e na tela inicial, com dois cenários de aprendizado que usam os 130 roteiros e não valem nota.
- Chamada Modelo: o sistema faz o atendente e o cliente, com duas vozes e legenda. Mostra anotações do que cada fala faz bem, a cadência de cada passo (palavras por fala, tempo de fala do cliente, pausas) e permite escolher o passo, a velocidade e ler sem som.
- Chamada Modelo: versão com erros típicos para comparar (sem abertura, sem empatia, silêncio sem aviso, protocolo rápido, falas longas), "Pare e responda" com comparação, e "Repetir depois do modelo" com gravação que fica só na tela.
- Troca de Lugar: o aluno é o cliente. Recebe um cartão da situação, responde com falas prontas, com voz ou digitando, e acompanha o medidor de paciência. Atendente bom ou ruim sorteado às cegas.
- Troca de Lugar: ao final o aluno dá nota de 0 a 10, aponta o que percebeu, descobre se o atendente era bom ou ruim, vê quais falhas passaram despercebidas e responde a três perguntas de reflexão, guardadas só no aparelho.
- Novas conquistas: Ouvido treinado, Mudou de lado e Olhar de cliente. XP por roteiro concluído na primeira vez.
- Duelo de alunos (dois aparelhos) fica registrado como próxima etapa, pois depende da nuvem do Fênix Core.

## Versão 1.1
Criada em 21/11/2026 · modificada em 21/11/2026

- Inclui os 120 roteiros de fábrica (10 cenários × 12 personas) dentro do app, com falas-modelo do atendente e do cliente em cada um dos 8 passos.
- Dois cenários novos: "Oscilação de energia e aparelho danificado" e "Aviso de corte com fatura já paga". Duas personas novas: "Prolixo" e "Exigente (pede supervisor)".
- Roteiros com cidades, bairros e ruas fictícios; atendimento sempre começa com "Atendimento {EMPRESA}" (padrão Fênix).
- Tela de Roteiros reorganizada por cenário, com visualização completa do roteiro, baixar em .md e catálogo em .json.
- Treino guiado mostra o diálogo completo do passo (A. e C.). A preparação da chamada mostra o perfil do cliente, o objetivo e o cuidado do cenário.
- Relatório mostra o que o avaliador observa e os erros comuns da persona. Liberação por nível passa a valer por combinação de cenário e persona.
- Correção: a meta do passo 2 agora inclui os 20 s de pausa (65 s) e as metas dos passos 6 e 8 seguem os roteiros (20 s e 15 s).

## Versão 1.0
Criada em 20/11/2026 · modificada em 20/11/2026

- Primeira versão do Fênix | Simulado de Atendimento.
- Simulação de chamada por voz em 8 passos fixos, com cronômetro da etapa, cronômetro total e contagem regressiva nas pausas (20 s, 10 s, 10 s de verificação e 5 s de anotação).
- 10 personas de cliente e 8 cenários de fábrica de setor genérico; nenhum nome, logo ou dado de empresa real.
- Variável {EMPRESA} com padrão "Fênix" e aviso fixo quando o aluno digita outro nome.
- Avaliação automática por checklist, banco de erros comuns, modo dica, relatório final em tela e PDF.
- Métricas TMA, TME, FCR, NPS simulado e qualidade da escuta ativa.
- Gamificação: níveis, XP, conquistas, desafio do dia e ranking por nick.
- Modo supervisor com faixa fixa "Supervisor observando". Gravação de áudio somente no aparelho.
- Teste integral de 15 dias, backup, exclusão de conta, tema escuro opcional e funcionamento sem internet.

