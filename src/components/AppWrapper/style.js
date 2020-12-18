import styled from 'styled-components';
import { devices } from '../../theme';

export const BorderWrapper = styled.div`
  display: flex;
  position: fixed;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  z-index: 10;
  pointer-events: none;
  border: 20px solid ${({ theme }) => theme.wrap};
  transition: all 400ms ease;

  @media screen and ${devices.tablet} {
    border: none;
  }
`;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ isMenuOpen, top }) => (isMenuOpen ? top : '0px')};
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  transition: all 400ms ease;

  @media screen and ${devices.tablet} {
    padding: 0;
  }
`;
