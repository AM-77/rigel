import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  DropdownWrapper,
  DropdownButton,
  DropdownName,
  DropdownIcon,
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuItem,
  DropdownMenuItemIcon,
} from './style';

const Dropdown = ({ button, list, currentVal, onSelect }) => {
  const [isDown, setIsDown] = useState(false);

  const onClick = () => {
    setIsDown(!isDown);
  };

  const onSelected = (id) => {
    setIsDown(false);
    onSelect(id);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={onClick}>
        <DropdownName>
          {button.icon && <DropdownIcon>{button.icon}</DropdownIcon>}
          {button.content}
        </DropdownName>
      </DropdownButton>
      <DropdownMenu isDown={isDown}>
        <DropdownMenuList>
          {list.map((item) => (
            <DropdownMenuItem
              selected={currentVal === item.id}
              onClick={() => onSelected(item.id)}
              key={item.id}
            >
              {item.content}

              {item.icon && (
                <DropdownMenuItemIcon>{item.icon}</DropdownMenuItemIcon>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuList>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  button: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
    content: PropTypes.string.isRequired,
  }).isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentVal: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
