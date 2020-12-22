import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const HomeWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const InnerWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1140px;
  height: calc(100vh - 85px);
  margin: 0px auto;
  padding-bottom: 50px;

  @media screen and ${devices.tablet} {
    flex-direction: column;
    width: 90%;
  }

  @media screen and ${devices.mobileL} {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  display: flex;
  position: relative;
  max-width: 190px;
  min-width: 190px;
  height: 200px;
  margin-right: 45px;

  div:last-child {
    position: absolute;
    overflow: hidden;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    border: 4px solid ${({ theme }) => theme.main};

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and ${devices.tablet} {
    margin: 45px 0px;
  }
`;

export const Dots = styled.div`
  position: absolute;
  left: -40px;
  top: -40px;
  width: 150px;
  height: 150px;

  & svg {
    fill: ${({ theme }) => theme.main};
  }

  @media screen and ${devices.mobileL} {
    display: none;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  padding: 0 10px;
`;

export const H2 = styled.h2`
  display: inline-block;
  width: fit-content;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 7px;

  @media screen and ${devices.laptop} {
    font-size: 30px;
  }

  @media screen and ${devices.tablet} {
    font-size: 28px;
    margin: 5px auto;
    text-align: center;
  }

  @media screen and ${devices.mobileL} {
    font-size: 25px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 20px;
  }
`;
