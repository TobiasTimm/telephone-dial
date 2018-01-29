import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  width: 100%;
  height: 100%;

  &:hover {
      background-color: rgb(197, 57, 57);
  }

  &:active {
    background-color: red;
  }
`;

function Button({ children, clicked }) {
  return <StyledButton onClick={clicked}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Button;
