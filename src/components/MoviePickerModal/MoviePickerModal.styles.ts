import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 85%;
  background-color: #404040;
  padding: var(--spacing-medium);
  border-radius: 10px;
  z-index: 2;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-medium);
  padding-bottom: var(--spacing-medium);
  padding-left: var(--spacing-medium);
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 26px;
  padding: var(--spacing-small);
  border: none;
  border-radius: 12px;
  font-size: var(--font-size-medium);
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  width: 32px;
  height: 32px;
  background-color: #595959;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  img {
    width: 14px;
  }
`;
