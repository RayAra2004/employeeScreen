import styled from 'styled-components';

type SCTableRowProps = {
  openInformations: boolean;
};

export const SCTableRow = styled.tr<SCTableRowProps>`
  box-shadow: ${props =>
    props.openInformations ? '' : '0px 1px 2px 0px rgba(0, 0, 0, 0.2)'};
  height: 49px;

  td {
    height: 100%;
    vertical-align: middle;
  }

  td:first-child {
    padding-left: 20px;
  }
  img {
    width: 34px;
    height: 34px;
  }

  .arrow {
    color: linear-gradient(
      var(--blue-primary-color),
      var(--blue-secundary-color)
    );
  }

  .mobile {
    text-align: center;
    button {
      border: none;
      background-color: transparent;
    }
  }

  @media (min-width: 1024px) {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const SCInformationsEmployee = styled.tr`
  display: table-row;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  td {
    padding: 0px 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px dashed var(--gray-10-color);
    margin-bottom: 16px;

    p {
      font-weight: 500;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
