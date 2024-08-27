// src/components/OptionItem.js
import React from 'react';

const OptionItem = ({ index, value, onChange, isDarkMode }) => (
  <div>
    <label>Option {index + 1}:</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={isDarkMode ? 'dark-input' : ''}
    />
  </div>
);

export default OptionItem;
