# Emplooye Screen

Esta aplicação tem como objetivo mostrar as informações dos empregados possibilitando uma pesquisa por nome, profissão ou telefone.
![image](https://github.com/RayAra2004/employeeScreen/assets/91473437/cd118397-ee5c-4ae7-baa1-9e5c78e10c04)
![image](https://github.com/RayAra2004/employeeScreen/assets/91473437/9b32e89b-1ea8-483a-8df3-f4a7346cd2ca)
![image](https://github.com/RayAra2004/employeeScreen/assets/91473437/2814af7c-be4b-4c37-ba28-bb399236fed6)

## Pré-requisitos
- Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/en).
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
