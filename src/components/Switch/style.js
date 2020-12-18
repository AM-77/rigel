import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50px;
  height: 28px;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.shadow};
  border-radius: 18px;
  padding: 2px;
`;

export const SwitchButton = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:checked + div {
    transform: translateX(22px);
  }
`;

export const SwitchContent = styled.div`
  display: block;
  transform: translateX(0);
  width: 24px;
  height: 24px;
  padding: 4px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  pointer-events: none;
  transition: all 150ms ease;
`;
