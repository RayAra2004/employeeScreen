import styled from 'styled-components';

export const SCTableRow = styled.tr`
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
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
`;
