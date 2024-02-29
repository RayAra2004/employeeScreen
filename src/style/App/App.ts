import styled from 'styled-components';

export const SCApp = styled.div`
  height: 100vh;
  background-color: var(--gray-00-color);

  main {
    margin: auto;
    width: 90%;
    padding-top: 60px;

    table {
      width: 100%;
      margin-top: 80px;
      border-collapse: collapse;
      font-weight: 400;
      font-size: 16px;
      .web {
        display: none;
      }
      @media (min-width: 1024px) {
        .web {
          display: table-cell;
        }

        .mobile {
          display: none;
        }
      }
    }
  }
`;

export const SCDivSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    margin-bottom: 20px;
  }
`;
