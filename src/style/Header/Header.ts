import styled from 'styled-components';

export const SCHeader = styled.header`
  background-color: var(--white-color);
  height: 60px;
  max-height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    padding-left: 60px;
  }

  img {
    width: 44px;
    object-fit: cover;
  }
`;
