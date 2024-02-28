import styled from 'styled-components';

export const SCSearchBar = styled.div`
  position: relative;
  input {
    width: 290px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid var(--gray-10-color);
    padding-left: 16px;
    ::placeholder {
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
    }
  }

  svg {
    position: absolute;
    top: 12px;
    right: 14px;
  }
`;
