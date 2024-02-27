import styled from 'styled-components';

export const SCHeader = styled.header`
  background-color: var(--white-color);
  height: 60px;
  max-height: 60px;
  padding-left: 20px;

  @media (min-width: 1024px) {
    padding-left: 32px;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;
