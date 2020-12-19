import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.wrap};
`;

export const InnerWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0 60px 0px;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and ${devices.mobileL} {
    padding: 50px 0 50px 0px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.5;
  margin-bottom: 35px;

  @media screen and ${devices.mobileL} {
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  position: relative;
  color: ${({ theme }) => theme.darkgrey};
  font-size: 16px;
  text-decoration: none;
  margin: 0 7px;
  transition: all 150ms ease;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }

  &.author,
  &.theme {
    font-size: 14px;
  }

  &.author:hover {
    color: #119955;
  }

  &.theme:hover {
    color: ${({ theme }) => theme.main};
  }

  &.facebook:hover {
    color: #4867aa;
  }

  &.twitter:hover {
    color: #50abf1;
  }

  &.instagram:hover {
    color: #ef4d58;
  }

  &.linkedin:hover {
    color: #0077b5;
  }

  &.github:hover {
    color: #878787;
  }

  &.behance:hover {
    color: #2d73ef;
  }

  &.dribbble:hover {
    color: #d31a63;
  }

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 0%;
    height: 1px;
    background-color: #4867aa;
    transition: all 150ms ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.theme:after {
    background-color: ${({ theme }) => theme.main};
  }

  &.author:after {
    background-color: #119955;
  }

  &.facebook:after {
    background-color: #4867aa;
  }

  &.twitter:after {
    background-color: #50abf1;
  }

  &.instagram:after {
    background-color: #ef4d58;
  }

  &.linkedin:after {
    background-color: #0077b5;
  }

  &.github:after {
    background-color: #878787;
  }

  &.behance:after {
    background-color: #2d73ef;
  }

  &.dribbble:after {
    background-color: #d31a63;
  }
`;

export const Rights = styled.div`
  display: flex;
  @media screen and ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const RightsContent = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.darkgrey};

  &.separator {
    margin: 0 15px;
  }

  @media screen and ${devices.mobileL} {
    margin-bottom: 10px;

    &.separator {
      display: none;
    }
  }
`;
