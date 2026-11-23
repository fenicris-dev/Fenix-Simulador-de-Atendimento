# Changelog — Fênix | Simulado de Atendimento

## Versão 1.7
Criada em 22/11/2026 · modificada em 22/11/2026

- Abertura (splash) no padrão Fênix 6.1: ícone do app, nome, "Fênix Soluções Tecnológicas", barrinha de vai e vem e dois holofotes subindo; fecha assim que a tela está pronta (teto de 1,2 s).
- Acesso no padrão Fênix 6.1: abas Entrar e Criar conta, Esqueceu a senha, e-mail e senha com botão do olho e indicador de força, farol de fundo, chave "Som de abertura" e botão do Google só com licença definitiva.
- O login passa a usar e-mail e senha, como dizem os Termos de Uso (cláusula 2). A senha fica só no aparelho, em hash. Quem já tinha cadastro define a senha no primeiro acesso.
- Primeiros passos no padrão Fênix 6.1: consulta de CNPJ e CEP com bloco da empresa editável, tela "Tudo pronto" e botão "Entrar no app". Mantidos nick, empresa do treino e onde guardar os dados.
- Logo oficial branca (águia) no cabeçalho dessas telas; prints do manual refeitos (novos: 00-criar-conta e 02b-tudo-pronto).
- Pacote com os 130 PDFs avulsos gerados de novo (rodapé v1.7).

## Versão 1.6
Criada em 22/11/2026 · modificada em 22/11/2026

- Logo oficial da Fênix (águia) aplicada no menu lateral, na abertura, no cadastro, no login, em Sobre e no cabeçalho dos PDFs (relatório da simulação e os 130 roteiros). A águia provisória foi removida. O ícone de instalação do app não mudou.
- Termos de Uso e Política de Privacidade oficiais (versão 4.9, de 27/10/2026): links reais no login, no onboarding, em Sobre e no bloco legal; Sobre mostra a versão e a data dos textos.
- Bloco legal do Simulado atualizado: controlador (60292 CRISTIANO RODRIGUES, CNPJ 60.292.878/0001-70), encarregado e contatos, uso profissional (18+) e foro de Aracaju/SE; em caso de divergência, valem os textos oficiais.
- Pacote com os 130 PDFs avulsos regenerados com a logo nova (roteiros-pdf-v1.6). Os roteiros em si não mudaram.

## Versão 1.5
Criada em 22/11/2026 · modificada em 22/11/2026

- Nova persona 13, Cliente vital (home care, dependente de energia), nos 10 cenários: passam a ser 130 roteiros (10 cenários × 13 personas). Libera a partir do nível Pleno (dois roteiros), Sênior (quatro) e Especialista (quatro).
- Avaliação da persona Vital: dois erros novos no banco de erros, "Não tratou como prioridade" e "Não orientou sobre o 192"; o relatório mostra o que o avaliador observa nesta persona.
- Chamada Modelo e Troca de Lugar com a persona Vital: o atendente com falhas deixa de priorizar e de orientar o 192, e o aluno-cliente pode apontar essas falhas na avaliação.
- Troca de Lugar: o medidor de paciência passa a começar em, no mínimo, 60, para o aluno ver mais falhas antes de o cliente desligar.
- Localidades dos 10 roteiros novos trocadas por nomes fictícios, como nos demais.
- Pacote com os 130 PDFs avulsos (roteiros-pdf-v1.5) e a pasta de referência dos roteiros (roteiros-referencia-v1.5), com catálogo, consolidados por cenário e índice atualizados.

## Versão 1.4
Criada em 21/11/2026 · modificada em 22/11/2026

- Cada roteiro ganhou o botão "Baixar PDF" (A4, cabeçalho e rodapé Fênix, perfil do cliente, erros comuns, o que o avaliador observa e as falas dos 8 passos), além do "Baixar .md".
- Pacote com os 120 PDFs avulsos de roteiro (pasta roteiros-pdf-v1.4), gerados pelo próprio app, com localidades fictícias.
- Ícone oficial do Simulador de Atendimento aplicado ao app: abertura, cadastro, login, Sobre, aba do navegador e ícone de instalação (Android, iPhone e computador), inclusive em formato adaptável.
- Novos arquivos de ícone: icone-192.png, icone-512.png, icone-maskable-512.png e apple-touch-icon.png (publicar junto do index.html).
- Manifesto do app com endereços absolutos de início e escopo, para instalar em qualquer pasta do GitHub Pages.
- A águia provisória continua no menu lateral e no relatório em PDF (substituída na versão 1.6).

## Versão 1.2
Criada em 21/11/2026 · modificada em 21/11/2026

- Nova área "Aprender" (menu, tela inicial e "Mais"), com dois cenários de aprendizado que usam os 120 roteiros e não valem nota.
- Chamada Modelo: o sistema faz o atendente e o cliente com duas vozes e legenda; anotações do que cada fala faz bem; cadência por passo (palavras por fala, fala do cliente, pausas, perguntas); escolha de passo, velocidade e leitura sem som.
- Chamada Modelo: versão com erros típicos para comparar; "Pare e responda" com comparação; "Repetir depois do modelo" com gravação que fica só na tela.
- Troca de Lugar: o aluno é o cliente, com cartão da situação, respostas prontas, voz ou digitação, medidor de paciência e atendente bom ou ruim sorteado às cegas.
- Troca de Lugar: nota de 0 a 10, falhas percebidas e despercebidas, palpite bom/ruim, reflexão em três perguntas guardada só no aparelho.
- Novas conquistas: Ouvido treinado, Mudou de lado, Olhar de cliente. XP na primeira conclusão de cada roteiro.
- Registrado para a próxima versão: Duelo de alunos (dois aparelhos), que depende da nuvem do Fênix Core.

## Versão 1.1
Criada em 21/11/2026 · modificada em 21/11/2026

- Inclui os 120 roteiros de fábrica (10 cenários × 12 personas) dentro do app, com as falas-modelo do atendente e as respostas do cliente nos 8 passos.
- Dois cenários novos: "Oscilação de energia e aparelho danificado" e "Aviso de corte com fatura já paga". Duas personas novas: "Prolixo" e "Exigente (pede supervisor)".
- Cidades, bairros e ruas dos roteiros trocados por nomes fictícios; a abertura é sempre "Atendimento {EMPRESA}" (padrão Fênix).
- Tela Roteiros por cenário, com "Ver" (roteiro completo), "Baixar .md" e catálogo em .json.
- Treino guiado mostra o diálogo completo do passo (A. e C.); a preparação da chamada mostra perfil do cliente, objetivo e cuidado.
- Relatório mostra o que o avaliador observa e os erros comuns da persona.
- Liberação por nível passa a valer por combinação de cenário e persona.
- Checklist adaptado ao roteiro: item que o roteiro não pede (ex.: ponto de referência) não é cobrado.
- Correção: um item cumprido no mesmo instante do início da chamada podia contar como não cumprido e travar os seguintes.
- Correção: a meta do passo 2 inclui os 20 s de pausa (65 s); metas dos passos 6 e 8 seguem os roteiros (20 s e 15 s).
- Correção: avisos falsos de "fora de ordem" e "não confirmou o protocolo" quando o aluno seguia o roteiro.

## Versão 1.0
Criada em 20/11/2026 · modificada em 20/11/2026

- Primeira versão do app (PWA, Web + Mobile), selo `v1.0 | c 5.8`, Livro das Regras v5.8.
- Simulação por voz em 8 passos, cronômetros, 8 cenários, 10 personas, avaliação, relatório em tela e PDF, métricas, gamificação, supervisor, gravação só no aparelho, teste de 15 dias, backup, exclusão de conta, tema escuro e offline.
