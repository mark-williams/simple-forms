import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const SectionHead = styled.h1`
  font-size: 2rem;  
  color: hsl(290, 32%, 62%);
`;

const Section = styled.div`
  text-align: left;
  color: hsl(0, 0%, 32%);
  line-height: 1.4;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AppContainer>
          <Section>
            <SectionHead>Quam Vehicula Elementum</SectionHead>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
          </Section>
        </AppContainer>
      </div>
    );
  }
}

export default App;
