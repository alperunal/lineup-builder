import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

import './ColorPicker.scss';

const ColorPicker = ({ color, setColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div>
      <div
        className="color-picker__swatch"
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
      >
        <div className="color-picker__color" style={{ background: color }} />
      </div>
      {displayColorPicker ? (
        <div className="color-picker__popover">
          <div
            className="color-picker__cover"
            onClick={() => setDisplayColorPicker(false)}
          />
          <SketchPicker
            color={color}
            onChange={(selectedColor) => setColor(selectedColor.hex)}
          />
        </div>
      ) : null}
    </div>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default ColorPicker;
