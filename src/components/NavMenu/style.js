import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../theme';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  @media screen and ${devices.tablet} {
    width: 80%;
    padding: 0;
    margin: 0 auto;
  }

  @media screen and ${devices.mobileL} {
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  height: 55px;
  width: 170px;
  position: relative;

  span {
    position: absolute;
    top: 0%;
    left: 0%;
    font-size: 44px;
    font-weight: 700;
    cursor: pointer;
    text-transform: capitalize;

    -webkit-text-fill-color: ${({ theme }) => theme.secondary};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.primary};

    &:before {
      content: attr(data-text);
      color: ${({ theme }) => theme.main};
      -webkit-text-fill-color: ${({ theme }) => theme.main};

      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 0%;
      transition: all 150ms ease;
    }

    &:hover::before {
      width: 100%;
    }
  }

  &.active span {
    color: ${({ theme }) => theme.main};
    -webkit-text-fill-color: ${({ theme }) => theme.main};
    -webkit-text-stroke-color: ${({ theme }) => theme.main};
  }
`;
