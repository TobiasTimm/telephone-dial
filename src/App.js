import React from 'react';
import styled from 'styled-components';
import DialerContainer from './containers/DialerContainer';

const Container = styled.div`
  width: 600px;
`;

function App() {
  return (
    <Container>
      <DialerContainer />
    </Container>
  );
}

export default App;
