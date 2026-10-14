# Fluxo de trabalho no Kanban (GitHub Projects)

Regras para gerenciar o quadro Kanban deste projeto. Seguir sempre.

## Dados do quadro

- Project: `portfolio-gbhermont-kanban` (número **1**), owner `gbhermont`
- Repositório: `gbhermont/portfolio` (nome real no GitHub é `portfolio`, sem "i",
  mesmo que o remote local esteja como `portifolio` — o GitHub redireciona)
- Colunas (campo Status): **Backlog → In progress → In review → Done**
- GitHub CLI: `C:\Program Files\GitHub CLI\gh.exe` (o comando `gh` pode não estar
  no PATH do terminal; usar o caminho completo quando necessário)

## Regras de movimentação

1. **Ao começar** a trabalhar em um card (requisito, documento ou qualquer tipo):
   mover para **In progress** e atribuir a `gbhermont`.
2. **Ao concluir** o trabalho: mover para **In review**.
3. **Nunca** mover um card para **Done** sem orientação expressa de `gbhermont`.
   A validação final é sempre manual, feita por ele.

## Formato dos cards

- Os cards são **issues** do repositório (não drafts), para permitir assignee e labels.
- Título com identificação do requisito. Ex: `REQ-01 — Índice lateral clicável`.
- Corpo com, nesta ordem:
  - **ID:** identificador do requisito (ex: REQ-01)
  - **Descrição:** breve e direta
  - **Checklist de validação:** itens objetivos em formato de checkbox
- Manter descrições **muito breves e diretas**.

## Labels

Toda issue deve receber a label adequada **assim que criada** (no mesmo passo da
criação, não depois):

- `documentation` — issues de documentação (README, docs, etc.)
- `enhancement` — novas features / funcionalidades
- `bug` — correção de bugs
