import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './style';

const Wrapper = ({ className, children }) => (
  <StyledWrapper className={className}>{children}</StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired
    ).isRequired,
  ]).isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
