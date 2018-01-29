import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

function DialButton({ label, value, clicked }) {
  return (
    <li>
      <Button clicked={() => clicked(value)}>{label}</Button>
    </li>
  );
}

DialButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DialButton;
