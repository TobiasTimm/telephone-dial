import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

function Output({ value }) {
  return <Input value={value} />;
}

Output.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Output;
