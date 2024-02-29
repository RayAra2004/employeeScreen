import styled from 'styled-components';

export const SCTableHeader = styled.thead`
  color: var(--white-color);
  background-image: linear-gradient(
    to bottom,
    #5a84c0,
    #4877ca,
    #4068d1,
    #4756d4,
    #593ed2
  );
  height: 47px;

  th:nth-child(3) {
    border-radius: 0px 8px 0px 0px;
  }

  th {
    vertical-align: middle;
    text-align: left;
  }
  th:first-child {
    padding-left: 20px;
    border-radius: 8px 0px 0px 0px;
  }

  .little-ball {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    th:nth-child(3) {
      border-radius: 0px;
    }

    th:last-child {
      border-radius: 0px 8px 0px 0px;
    }
  }
`;
