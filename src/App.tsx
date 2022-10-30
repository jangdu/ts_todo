// % yarn add react-icons styled-components
// % yarn add @types/styled-components     

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplete from './components/TotoTemplate';
import TodoHead from './components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body{
    background: dimgray;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
      </TodoTemplete>
    </div>
  );
}

export default App;
