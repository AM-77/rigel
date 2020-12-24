import styled from 'styled-components';
import { devices } from '../../theme';
import Wrapper from '../../components/Wrapper';

export const ContactWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const InnerWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 75px;
  width: 100%;
  max-width: 1140px;
  min-height: calc(100vh - 85px);
  margin: 0 auto;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &.title-wrapper {
    padding: 70px 0;
    max-width: 450px;
    margin: 0 auto;

    a {
      display: inline-block;
      position: relative;
      color: ${({ theme }) => theme.main};
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      margin: 0;
      transition: all 150ms ease;
      text-indent: 0;

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
    }
  }

  &.main-wrapper {
    width: 100%;
    margin: 25px;
    padding: 35px;
    background-color: ${({ theme }) => theme.lightershadow};
    box-shadow: 0 0 2px 0 ${({ theme }) => theme.shadow};
  }

  &.head {
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

export const DivRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;
`;

export const P = styled.p`
  text-align: justify;
  margin-bottom: 7px;
  padding: 0 20px;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and ${devices.mobileL} {
    width: 90%;
  }
`;

export const InputsWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 45px;

  @media screen and ${devices.tablet} {
    flex-direction: column;
  }
`;

export const InputWrapper = styled(Wrapper)`
  align-items: center;
  width: 45%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    z-index: 1;
    background: ${({ theme }) => theme.darkgrey};
  }

  @media screen and ${devices.tablet} {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  width: max-content;
  height: 35px;
  position: relative;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary};

  &.label-textarea {
    top: 1px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    z-index: 2;
    background: ${({ theme }) => theme.main};
  }
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 35px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
  padding: 0 15px;
  border: none;
  background: none;
  outline: none;
`;

export const TextareaWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 45px;
`;

export const Textarea = styled.textarea`
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  font-weight: 300;
  width: 100%;
  height: 174px;
  resize: vertical;
  padding: 0;
  padding-top: 0px;
  line-height: 41px;
  background-color: transparent;
  background-image: linear-gradient(
    ${({ theme }) => theme.darkgrey} 1px,
    transparent 1px
  );
  background-attachment: local;
  background-size: 100% 41px;
  border: 0;
  z-index: 1;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 500;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.main};
  height: 34px;
  width: 80px;
  cursor pointer;
  outline: none;
  transition: all 100ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.main};
  }

  @media screen and ${devices.mobileL} {
    width: 100%;
  }
`;
