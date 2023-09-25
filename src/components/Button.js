/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className }) => (
  (
    <button type="button" onClick={onClick} className={className}>Add book</button>
  )
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
