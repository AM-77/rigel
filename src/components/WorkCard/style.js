import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper';

export const WorkCardWrapper = styled(Wrapper)`
  flex-direction: column;

  & button {
    margin: 0;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.main};
    }
  }
`;
export const WorkCardLink = styled(Link)`
  position: relative;
`;

export const HoverCard = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background: ${({ theme }) => `${theme.secondary}99`};
  opacity: 0;
  transition: all 150ms ease;

  &:hover {
    opacity: 1;
  }

  & i {
    text-transform: capitalize;
    text-decoration: none;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`;

export const TitleLink = styled(Link)`
  font-size: 24px;
  font-weight: lighter;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  text-transform: capitalize;
  margin: 5px 0;
  transition: all 100ms ease;
`;
