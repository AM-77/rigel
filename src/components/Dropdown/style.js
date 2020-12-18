import styled, { css } from 'styled-components';

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;

  & ul {
    visibility: visible;
    opacity: 1;
    margin: 10px 0;
  }
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: 10px;
  text-align: left;
  cursor: pointer;
  position: relative;
  min-width: 120px;
  transition: all 400ms ease;
`;

export const DropdownName = styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  font-weight: 800;
  position: relative;
  letter-spacing: 1.5px;
`;

export const DropdownIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 5px;
  transition: all 150ms ease;

  & svg {
    fill: ${({ theme }) => theme.secondary};
    width: 17px;
    height: 17px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 3px 6px 0px ${({ theme }) => theme.shadow};
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  margin-top: 10px;
  margin-bottom: 10px;

  ${({ isDown }) =>
    isDown &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const DropdownMenuList = styled.ul`
  margin: 0;
  padding: 0 13px;
  list-style: none;

  &:before {
    content: '';
    background-color: transparent;
    border-right: 8px solid transparent;
    position: absolute;
    border-left: 8px solid transparent;
    border-bottom: 8px solid ${({ theme }) => theme.secondary};
    border-top: 8px solid transparent;
    top: -15px;
    right: 18px;
  }

  &:after {
    content: '';
    background-color: transparent;
  }
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  font-size: 13px;
  padding: 13px 0;
  text-align: left;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.grey};

  &:hover {
    color: ${({ theme }) => theme.main};
  }

  &:last-of-type {
    border-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 28px;
    background-color: ${({ theme }) => theme.main};
    left: -13px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  &:hover:before {
    display: block;
  }

  ${({ selected }) =>
    selected &&
    css`
      & {
        color: ${({ theme }) => theme.main};
      }

      &:before {
        display: block;
      }
    `}
`;

export const DropdownMenuItemIcon = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  margin-left: auto;
  box-shadow: 0 0px 3px 0 ${({ theme }) => theme.primary};

  & div,
  & span {
    width: 100%;
    height: 100%;
  }
`;
