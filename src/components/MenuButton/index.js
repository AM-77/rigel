import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Line } from './style';

const MenuButton = ({ type, onOpen, isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const onClick = () => {
    onOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Button
      onClick={onClick}
      className={`menu-button ${isOpen ? type : ''}`}
      type="button"
    >
      <Line className="line__st" />
      <Line className="line__nd" />
      <Line className="line__rd" />
    </Button>
  );
};

MenuButton.propTypes = {
  type: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
