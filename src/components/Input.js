import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value }) => {
  return (
    <input
      className='todo__addbar-input'
      data-testid='text-input'
      type='text'
      value={value}
      onChange={onChange}
    ></input>
  );
};

Input.propTypes = {};

export default Input;
