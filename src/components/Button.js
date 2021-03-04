import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  return (
    <button
      className='todo__addbar-button'
      data-testid='add-button'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
