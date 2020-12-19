import styled from 'styled-components';
import { devices } from '../../theme';

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 20px 40px;
  z-index: 1;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and ${devices.tablet} {
    padding: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 45px;
  height: 45px;

  & svg {
    padding: 8px;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.main};
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & .dropdown__button {
    background: none;
    box-shadow: none;

    & .dropdown__button-name {
      color: ${({ theme }) => theme.secondary};

      & svg {
        fill: ${({ theme }) => theme.secondary};
      }
    }
  }

  & .menu-button {
    margin-left: 15px;
  }
`;
