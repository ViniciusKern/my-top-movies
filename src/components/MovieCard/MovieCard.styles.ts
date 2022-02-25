import styled from 'styled-components';

const DefaultContainer = styled.div`
  width: 140px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 2%;
  transition: background-color 0.3s;
  cursor: pointer;
  position: relative;
`;

export const PlaceholderContainer = styled(DefaultContainer)`
  height: 190px;
  margin: var(--spacing-small) 0;
  padding: var(--spacing-small);
  justify-content: center;
  gap: var(--spacing-medium);
  border: 2px dashed #8c8c8c;
  background-color: #595959;

  &:hover {
    background-color: #333;
  }

  & img {
    width: 26px;
    margin: 0 auto;
  }
`;

export const MovieContainer = styled(DefaultContainer)`
  padding: var(--spacing-small);
  background-color: #404040;

  &:hover {
    background-color: #595959;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 2%;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: var(--font-size-regular);
`;

export const Rank = styled.div<{ isPlaceholder?: boolean }>`
  position: absolute;
  top: 8px;
  padding-top: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 14px;
  font-size: var(--font-size-medium);
  font-weight: bold;

  ${(props) =>
    !props.isPlaceholder &&
    `
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 212, 255, 0) 100%
    );
  `}
`;
