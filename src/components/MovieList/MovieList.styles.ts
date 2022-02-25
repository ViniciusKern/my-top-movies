import styled from 'styled-components';

export const MovieListContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 75vh;
`;

export const Info = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  font-size: var(--font-size-large);
`;
