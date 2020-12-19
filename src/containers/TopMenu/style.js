import styled from 'styled-components';
import { devices } from '../../theme';

export const TopMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  opacity: 0;
  transition: all 250ms ease;

  &.active {
    opacity: 1;
  }
`;

export const TopMenuContent = styled.div`
  display: flex;
  padding: 60px 40px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and ${devices.tablet} {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HireMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  opacity: 0.75;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.9;
  }

  @media screen and ${devices.tablet} {
    margin-right: auto;
    width: 80%;
  }

  @media screen and ${devices.mobileL} {
    width: 100%;
  }
`;

export const HireMeTitle = styled.h2`
  font-size: 44px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

export const HireMeContent = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  max-width: 420px;

  margin-bottom: 10px;
  line-height: 1.5;
`;

export const HireMeLink = styled.a`
  display: inline-flex;
  position: relative;
  width: max-content;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
  margin-top: auto;
  text-decoration: none;
  opacity: 0.5;
  transition: all 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.main};
    opacity: 1;
  }

  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    content: '';
    width: 0%;
    height: 1px;
    background-color: ${({ theme }) => theme.main};
    transition: all 150ms ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
