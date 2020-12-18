import React from 'react';
import PropTypes from 'prop-types';
import useTop from '../../hooks/useTop';
import { StyledAppWrapper, BorderWrapper } from './style';

const AppWrapper = ({ children, isMenuOpen }) => {
  const top = useTop();
  return (
    <>
      <BorderWrapper />
      <StyledAppWrapper isMenuOpen={isMenuOpen} top={top}>
        {children}
      </StyledAppWrapper>
    </>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired
    ).isRequired,
  ]).isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default AppWrapper;
