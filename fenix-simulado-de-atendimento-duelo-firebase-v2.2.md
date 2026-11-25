# Duelo de alunos — preparação para o Firebase (v2.2)

Situação: **engatilhado e desligado**. O app já tem a estrutura (`DUELO_CFG`, objeto `Duelo`, cartão "Duelo de alunos" em Aprender). Falta só a nuvem.

## Resposta à pergunta "correto?"
Sim. O caminho certo é Firebase (Firestore + Authentication) **pelo Fênix Core**, como diz o Livro 6.2 (o app não cria conexão própria). O Duelo usa o login do aluno e os dados na nuvem da Fênix; áudio nunca sobe.

## O que você precisa providenciar
1. Projeto Firebase do core ativo (Firestore e Authentication por e-mail; Google só com licença definitiva).
2. `FENIX_BANCO_ATIVO = true` no core/app e o app em domínio autorizado (fenicris-dev.github.io).
3. Publicar as regras abaixo (somando às `firestore.rules` da biblioteca, pelo checklist da regra 46) e testar com dois navegadores.
4. Me avisar: eu implemento o adaptador (`Duelo.adaptador`) com as funções reais do core e viro `DUELO_CFG.ativo=true`.

## Modelo de dados
`duelos/{codigo}` (código de 6 caracteres, vale 24 h)
- `roteiro`, `persona`, `anfitriao` (uid), `convidado` (uid), `estado` (aguardando, em_andamento, encerrado), `criadoEm`, `expiraEm`, `nota` (preenchida no fim).

`duelos/{codigo}/turnos/{n}`
- `n` (sequência), `papel` ("A" ou "C"), `texto` (até 500 caracteres), `t` (hora do servidor). Máximo 200 turnos.

Fluxo: anfitrião cria a sala e passa o código; o colega entra pelo código; sorteio (ou escolha) de quem atende; cada fala vira um turno; ao fim, o app avalia o lado do atendente com o checklist do roteiro e grava a nota. Áudio e gravação ficam só no aparelho.

## Regras sugeridas do Firestore (rascunho para revisar no Playground)
```
match /duelos/{cod} {
  allow create: if request.auth != null && request.resource.data.anfitriao == request.auth.uid
                && request.resource.data.estado == 'aguardando';
  allow read: if request.auth != null;   // só quem sabe o código chega à sala
  allow update: if request.auth != null
                && (resource.data.anfitriao == request.auth.uid
                    || resource.data.convidado == request.auth.uid
                    || (resource.data.convidado == null && request.resource.data.convidado == request.auth.uid));
  allow delete: if request.auth != null && resource.data.anfitriao == request.auth.uid;
  match /turnos/{n} {
    allow read: if request.auth != null;
    allow create: if request.auth != null
      && request.resource.data.texto.size() <= 500
      && (get(/databases/$(database)/documents/duelos/$(cod)).data.anfitriao == request.auth.uid
          || get(/databases/$(database)/documents/duelos/$(cod)).data.convidado == request.auth.uid);
    allow update, delete: if false;
  }
}
```
Limpeza: salas vencidas (expiraEm) são apagadas pelo anfitrião ou por rotina administrativa. Antes de publicar, rodar os testes de regras da biblioteca (`testes/regras/`).

## Pontos de decisão (sua escolha)
- Duelo só entre membros da mesma empresa ou aberto por código? (sugestão: por código.)
- Nota do duelo entra no ranking? (sugestão: sim, com XP próprio.)
- Termos e Política precisam citar o duelo (texto dos turnos na nuvem por 24 h) quando for ligado; isso muda a data "Atualizado em" dos dois.
