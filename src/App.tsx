import React from 'react';
import GlobalStyle from '@styles/globalStyle';
import styled from 'styled-components';

const Title = styled.h1`
  background: #000000;
  color: gold;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Title>Hello :)</Title>
    </>
  );
}

export default App;
