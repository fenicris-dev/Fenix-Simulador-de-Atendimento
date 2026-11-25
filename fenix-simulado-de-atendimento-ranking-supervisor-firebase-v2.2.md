# Ranking e Supervisor entre aparelhos — preparação para o Firebase (v2.2)

Situação: **engatilhado**. O app já grava e lê pela ponte do Fênix Core (`Nuvem.salvar` e `Nuvem.listar`, que usam `salvarDoc` e `listarDocs`). Enquanto a nuvem não está ativa, tudo fica só no aparelho (o ranking mostra apenas o aluno e a Supervisão lê só as simulações do aparelho). Quando a nuvem ligar, o app passa a gravar e ler sozinho; falta você providenciar o banco e as regras.

## O que você precisa providenciar
1. Projeto Firebase do core ativo (Firestore e Authentication por e-mail), `FENIX_BANCO_ATIVO = true` e domínio autorizado.
2. Publicar as regras abaixo, somando às `firestore.rules` da biblioteca, e testar com dois aparelhos (aluno e supervisor).
3. Conferir se o core real expõe `salvarDoc`, `listarDocs` e `excluirMinhaConta`. O app detecta pelo nome; se o core usar outro nome, me avise que eu ajusto a ponte.
4. Atualizar Termos e Política: passam a citar as simulações (sem áudio) e o nick no ranking guardados na nuvem.

## O que o app grava (e nunca grava)
- Grava: `simulacoes/{id}` (nota, modo, erros, tempos, roteiro, nota mínima), `ranking/{uid}` (nick, pontos por período), `roteiros/{id}` (roteiros do aluno).
- Nunca sobe: áudio das gravações, voz gravada dos roteiros, nome da empresa digitada no campo livre da simulação (removido por `semPrivado`).

## Modelo de dados
`empresas/{empresaId}/membros/{uid}`: `papel` (aluno, supervisor), `nick`, `entrouEm`.
`simulacoes/{id}`: `uid`, `empresaId`, `roteiroId`, `modo` (treino, guiado, avaliacao, prova), `nota`, `notaMin`, `erros[]`, `tma`, `tme`, `quando`.
`ranking/{uid}`: `nick`, `empresaId`, `pontos`, `semana`, `mes`.

## Regras sugeridas (rascunho para revisar no Playground)
```
match /simulacoes/{id} {
  allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
  allow read: if request.auth != null
    && (resource.data.uid == request.auth.uid
        || get(/databases/$(database)/documents/empresas/$(resource.data.empresaId)/membros/$(request.auth.uid)).data.papel == 'supervisor');
  allow update, delete: if request.auth != null && resource.data.uid == request.auth.uid;
}
match /ranking/{uid} {
  allow read: if request.auth != null;
  allow write: if request.auth != null && request.auth.uid == uid;
}
```
A leitura da Supervisão só deve valer para quem é `supervisor` da mesma empresa. Antes de publicar, rodar os testes de regras da biblioteca (`testes/regras/`).

## Pontos de decisão (sua escolha)
- Ranking por empresa ou geral? (sugestão: por empresa, com opção de geral só com nick.)
- A nota mínima da prova fica por empresa na nuvem (hoje é por aparelho)? (sugestão: sim, em `empresas/{id}.notaMin`.)
- A aba Erros mais comuns passa a somar todos os alunos da empresa.
