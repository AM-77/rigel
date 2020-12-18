import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SwitchWrapper, SwitchContent, SwitchButton } from './style';

const Switch = ({ init, on, off, onSwitch }) => {
  const [checked, setChecked] = useState(init);

  const onCheck = (e) => {
    onSwitch(e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <SwitchWrapper>
      <SwitchButton defaultChecked={checked} onChange={onCheck} />
      <SwitchContent>{checked ? off : on}</SwitchContent>
    </SwitchWrapper>
  );
};

Switch.propTypes = {
  init: PropTypes.bool.isRequired,
  on: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired,
  off: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object])
    .isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default Switch;
