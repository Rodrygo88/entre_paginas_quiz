# Entre Paginas Quiz

Um quiz literario feito em React para testar memoria, repertorio e carinho por grandes livros. A cada rodada, o app sorteia uma pergunta e apresenta quatro alternativas. Ao responder, ele destaca a opcao correta, marca a escolha do usuario e toca um feedback sonoro.

## Site

Projeto publicado no GitHub Pages:

https://rodrygo88.github.io/entre_paginas_quiz/

## Funcionalidades

- Sorteio aleatorio de perguntas a partir de um arquivo JSON.
- Perguntas sobre personagens, sinopses e obras literarias.
- Feedback visual para acertos e erros.
- Sons diferentes para resposta correta e incorreta.
- Botao minimalista para carregar uma nova pergunta.
- Layout responsivo para telas menores.

## Tecnologias

- React
- Vite
- CSS Modules
- GitHub Pages

## Estrutura

```text
entre_paginas_quiz/
├── projeto_react/
│   ├── public/data/perguntas.json
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## Como rodar localmente

Entre na pasta do app:

```bash
cd projeto_react
```

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse o endereco indicado pelo Vite. Neste projeto, por causa da configuracao de base do GitHub Pages, normalmente fica assim:

```text
http://localhost:5173/entre_paginas_quiz/
```

## Scripts

Dentro de `projeto_react`:

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera a versao de producao em `dist`.
- `npm run preview`: abre uma previa local do build.
- `npm run lint`: roda o ESLint.
- `npm run deploy`: publica o conteudo de `dist` na branch `gh-pages`.

## Dados do quiz

As perguntas ficam em:

```text
projeto_react/public/data/perguntas.json
```

Cada item segue o formato:

```json
{
  "tipo": "De qual livro e o personagem?",
  "pergunta": "Capitu",
  "opcoes": [
    "Memorias Postumas de Bras Cubas",
    "Helena",
    "Dom Casmurro",
    "Quincas Borba"
  ],
  "resposta": "Dom Casmurro"
}
```

## Deploy

O deploy e feito com `gh-pages`:

```bash
cd projeto_react
npm run deploy
```

O Vite usa `base: "/entre_paginas_quiz/"`, configurado em `projeto_react/vite.config.js`, para que os assets funcionem corretamente no GitHub Pages.

## Autor

Desenvolvido por Rodrigo Silva.
