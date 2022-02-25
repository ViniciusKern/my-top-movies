import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 0 auto;
  animation: ${rotate360} 1.2s linear infinite;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 2px solid black;
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

function LoadingSpinner() {
  return <Spinner />;
}

export default LoadingSpinner;
