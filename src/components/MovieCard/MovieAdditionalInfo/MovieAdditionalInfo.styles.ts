import styled from 'styled-components';

export const AdditionalInfoContainer = styled.div`
  font-size: var(--font-size-small);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-extra-small);
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-extra-small);

  & img {
    width: 12px;
  }
`;
