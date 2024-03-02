# Emplooye Screen

Esta aplicação tem como objetivo mostrar as informações dos empregados possibilitando uma pesquisa por nome, profissão ou telefone.

## Pré-requisitos
- É necessário deixar um terminal rodando o servidor e outro com o projeto. Para saber mais veja: [Como rodar o projeto](#como-rodar-o-projeto)
- A variável de ambiente `VITE_API_URL` deve ter o valor `http://localhost:3000`

## Como rodar o projeto

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Configure as variáveis de ambiente em um arquivo chamado `.env` na raiz do projeto, conforme o `.env.example`.
4. Execute o comando `npm run server` no terminal para iniciar o servidor com os dados.
5. Em outro terminal execute `npm run dev`.
6. Acesse o site no link disponibilizado no terminal.

<details>
<summary>Variáveis de ambiente</summary>
  <br/>
  VITE_API_URL=http://localhost:3000
</details>

## Tecnologias Utilizadas

- React (Vite)
- TypeScript
- Styled-Components
- Axios
