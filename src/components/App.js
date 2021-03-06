import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../style';
import Home from './Home';
import PersonForm from './PersonForm';
import SteppedFormsContainer from './wizard/SteppedFormsContainer';

const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Routes = () => (
  <Switch>
    <Route exact path={'/form'} component={PersonForm} />
    <Route path={'/wizard'} component={SteppedFormsContainer} />
    <Route component={Home} />
  </Switch>
);

const Navigation = styled.div`
  background-color: black;
  color: white;
  padding: 0.6rem;
  text-align: left; 
  a {
    color: hsl(0, 0%, 80%);
    text-decoration: none;
    margin-right: 1.2rem;
    &:hover {
      color: white;
    }
    &.active {
      border-bottom: 1px solid hsl(0, 0%, 80%);        
    }
  };
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome</h1>
              <div>
                <Navigation>
                  <NavLink activeClassName="active" exact to="/">Home</NavLink>
                  <NavLink activeClassName="active" to="/form">Form</NavLink>
                  <NavLink activeClassName="active" to="/wizard">Wizard</NavLink>
                </Navigation>
              </div>
            </header>
            <AppContainer>
              <Section>
                <Routes />
              </Section>
            </AppContainer>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
