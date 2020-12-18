import styled, { keyframes } from 'styled-components';
import Wrapper from '../Wrapper';

const Spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled(Wrapper)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled.div`
  display: inline-block;
  width: ${({ dim }) => dim || '50px'};
  height: ${({ dim }) => dim || '50px'};
  border-width: ${({ bw }) => bw || '3px'};
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.main};
  animation: ${Spin} 650ms ease-in-out infinite;
`;
