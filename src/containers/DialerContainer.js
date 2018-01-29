import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Dialer from '../components/Dialer/Dialer';
import Output from '../components/Output/Output';
import { addToOutput } from '../actions/OutputActions';
import Button from '../components/Button/Button';

const Result = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  padding: 5px;
`;

const Sum = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  background-color: #ccc;
`;

function DialerContainer({ output, onDialClicked }) {
  const calcSum = () => {
    if (output) {
      const sum = output.split('').reduce((result, element) => {
        if (!isNaN(element)) {
          result += +element;
        }
        return result;
      }, 0);
      console.log(sum);
    }
  };

  return (
    <div>
      <Dialer dialClicked={onDialClicked} />
      <Result>
        <Output value={output} />
      </Result>
      <Sum>
        <Button clicked={calcSum}>Calculate Sum</Button>
      </Sum>
    </div>
  );
}

const mapStateToProps = state => ({ output: state.output });

const mapDispatchToProps = dispatch => ({
  onDialClicked: (value) => {
    dispatch(addToOutput(value));
  },
});

DialerContainer.propTypes = {
  output: PropTypes.string.isRequired,
  onDialClicked: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialerContainer);
