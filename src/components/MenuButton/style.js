import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  position: relative;
  width: 23px;
  height: 18px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;

  &.arrow .line__st {
    left: -50%;
    transform: rotate(-45deg);
    transform-origin: right top;
  }

  &.arrow .line__nd,
  &.close .line__nd {
    opacity: 0;
  }

  &.arrow .line__rd {
    top: 0;
    left: 50%;
    margin-top: 0;
    transform: rotate(45deg);
    transform-origin: left top;
  }

  &.close .line__st {
    top: 50%;
    transform: rotate(-45deg);
  }

  &.close .line__rd {
    top: 50%;
    margin-top: -1px;
    transform: rotate(45deg);
  }
`;

export const Line = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  left: 0;
  width: 100%;
  top: 50%;
  margin-top: -1px;
  background-color: ${({ theme }) => theme.secondary};
  transition: all 200ms ease;

  &.line__st {
    top: 1px;
  }

  &.line__rd {
    top: 100%;
    margin-top: -2px;
  }
`;
