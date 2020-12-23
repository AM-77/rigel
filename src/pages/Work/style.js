import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const WorkWrapper = styled(Wrapper)`
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

  &.work-content {
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
`;
