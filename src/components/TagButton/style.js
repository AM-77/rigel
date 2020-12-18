import styled from 'styled-components';

const StyledTagButton = styled.button`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.darkgrey};
  background: none;
  border: none;
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 7px;
  transition: all 150ms ease;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 0%;
    height: 1px;
    background-color: ${({ theme }) => theme.main};
    transition: all 150ms ease;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.main};
  }
`;

export default StyledTagButton;
