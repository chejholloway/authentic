import React from 'react';
import tw, { styled } from 'twin.macro';
import logo from './logo.svg';
import './App.css';

const Container = tw.div`bg-blue-500 p-4`;

const Button = styled.button`
  ${tw`bg-green-500 text-white font-bold py-2 px-4 rounded`}
  ${tw`bg-blue-500`}
`;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Container>
        <Button>Normal Button</Button>
        <Button>Primary Button</Button>
      </Container>
    </div>
  );
}

export default App;
