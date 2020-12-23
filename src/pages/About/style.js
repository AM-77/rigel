import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const AboutWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const InnerWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;
  min-height: calc(100vh - 85px);
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;

  &.title-wrapper {
    padding: 70px 0;
  }

  &.main-wrapper {
    width: 90%;
    margin: 25px auto;
    padding: 35px;
    background-color: ${({ theme }) => theme.lightershadow};
    box-shadow: 0 0 2px 0 ${({ theme }) => theme.shadow};

    @media screen and ${devices.tablet} {
      padding: 30px 20px;
    }
  }

  &.head {
    align-items: flex-start;
    margin-bottom: 40px;
  }

  &.avatar {
    width: 220px;
    height: 220px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.main};
  }
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 27px;
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
  font-size: 18px;
  font-weight: 400;
  text-indent: 15px;
  text-align: justify;
  margin-bottom: 7px;

  @media screen and ${devices.tablet} {
    font-size: 16px;
  }

  &.about-content {
    max-width: 450px;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    line-height: 1.5;
    padding: 0 20px;

    @media screen and ${devices.mobileL} {
      font-size: 14px;
    }
  }

  &.about-main {
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.4;

    @media screen and ${devices.mobileL} {
      font-size: 14px;
    }
  }
`;
