import styled from 'styled-components';

export const TopMoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: stretch;
  max-width: 1200px;
  padding: var(--spacing-small);
  text-align: center;
  margin: 0 auto;
  background-color: #404040;
  border-radius: 5px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const Header = styled.h2`
  text-align: center;
  margin: var(--spacing-medium);
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-medium);
`;

export const ApiAttributionLogo = styled.img`
  max-width: 300px;
`;
