import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const WorkDetailsWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const InnerWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  min-height: calc(100vh - 85px);
  margin: 0 auto;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.infos {
    position: relative;
    width: 40%;
    padding: 25px;

    @media screen and ${devices.laptop} {
      width: 100%;
    }
  }

  &.imgs {
    width: 60%;
    padding: 25px;

    & > div {
      display: none;
    }

    & > div:first-child {
      display: flex;
      max-height: 500px;
      cursor: zoom-in;

      @media screen and ${devices.laptop} {
        div {
          height: 500px;
          margin-bottom: 45px;
        }
      }

      @media screen and ${devices.tablet} {
        div {
          height: 400px;
        }
      }

      @media screen and ${devices.mobileL} {
        div {
          height: 250px;
        }
      }

      img {
        display: flex;
        width: auto;
        height: 100%;
        margin: auto;
      }
    }

    @media screen and ${devices.laptop} {
      width: 100%;
    }
  }

  &.title {
    margin-bottom: 30px;
  }
`;

export const DivRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;

  &.tools,
  &.links {
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  &.works-nav {
    justify-content: space-between;
    padding: 0 25px;
  }

  &.content {
    @media screen and ${devices.laptop} {
      flex-direction: column;
    }
  }
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  text-transform: capitalize;
  padding: 10px;
  text-align: center;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const H4 = styled.h4`
  font-weight: 600;
  font-size: 15px;
  text-transform: capitalize;
  margin-bottom: 5px;
  opacity: 0.5;
`;

export const P = styled.p`
  font-size: 15px;
  line-height: 1.4;
  font-weight: 400;
  text-indent: 15px;
  margin-bottom: 7px;
  color: ${({ theme }) => `${theme.secondary}aa`};
`;

export const B = styled.b`
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => `${theme.secondary}aa`};
`;

export const WorkLink = styled(Link)`
  display: inline-flex;
  position: relative;
  width: max-content;
  font-size: 16px;
  text-transform: capitalize;
  margin-right: 15px;
  color: ${({ theme }) => `${theme.secondary}aa`};
  margin-bottom: 10px;
  margin-top: auto;
  text-decoration: none;
  cursor: pointer;
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

  &.link {
    margin-bottom: 5px;
  }

  &.work-link {
    color: ${({ theme }) => theme.secondary};
    text-transform: none;
    font-weight: 500;
    font-size: 17px;
    margin: 0;

    &:hover {
      color: ${({ theme }) => theme.main};
    }

    &.disable {
      pointer-events: none;
      color: ${({ theme }) => `${theme.secondary}77`};
    }

    b {
      display: none;
    }

    @media screen and ${devices.mobileL} {
      & span {
        display: none;
      }

      b {
        display: block;
        font-size: 24px;
        line-height: 0.7;
      }
    }
  }

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;
