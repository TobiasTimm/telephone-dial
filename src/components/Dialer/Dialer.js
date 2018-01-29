import React from 'react';
import PropTypes from 'prop-types';
import DialButton from './DialButton/DialButton';
import styled from 'styled-components';

const DIAL_BUTTONS = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '*', value: '*' },
  { label: '0', value: 0 },
  { label: '#', value: '#' },
];

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-content: center;
  list-style: none;
  flex-wrap: wrap;

  li {
    flex: 0 0 32%;
    height: 50px;
    margin-bottom: 5px;
    background-color: #999;
  }
`;

function Dialer({ dialClicked }) {
  return (
    <List>
      {DIAL_BUTTONS.map(button => (
        <DialButton key={button.value} {...button} clicked={dialClicked} />
      ))}
    </List>
  );
}

Dialer.propTypes = {
  dialClicked: PropTypes.func.isRequired,
};

export default Dialer;
