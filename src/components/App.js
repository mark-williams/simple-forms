import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../style';
import Home from './Home';
import PersonForm from './PersonForm';

const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={'/form'} component={PersonForm} />
      <Route component={Home} />
    </Switch>
  </Router>
);

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
            <Routes />
          </Section>
        </AppContainer>
      </div>
    );
  }
}

export default App;
