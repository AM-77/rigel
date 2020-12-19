import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const ListWrapper = styled(Wrapper)`
  width: 100%;
  flex-wrap: wrap;
  padding: 0 25px;
`;

export const StyledWorkCard = styled.div`
  display: flex;
  width: calc((100% - 50px) / 3);
  padding: 15px;

  @media screen and ${devices.tablet} {
    width: calc((100% - 50px) / 2);
  }

  @media screen and ${devices.mobileL} {
    width: calc((100% - 50px) / 1);
  }
`;
