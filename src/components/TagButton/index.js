import React from 'react';
import PropTypes from 'prop-types';
import StyledTagButton from './style';

const TagButton = ({ content, isActive, setFilterKey }) => {
  return (
    <StyledTagButton
      className={isActive ? 'active' : ''}
      type="button"
      onClick={() => setFilterKey(content === 'all' ? '*' : content)}
    >
      {content}
    </StyledTagButton>
  );
};

TagButton.propTypes = {
  isActive: PropTypes.bool,
  content: PropTypes.string.isRequired,
  setFilterKey: PropTypes.func.isRequired,
};

TagButton.defaultProps = {
  isActive: false,
};

export default TagButton;
