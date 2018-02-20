import React, { Fragment } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WizardNavigation = styled.div`
  display: flex;
  flex-direction: row;
`;

const WizardNavigationItem = styled.div`
  margin-right: 1rem;
  margin-bottom: 1.6rem;
  a {
    font-size: 1.2rem;
    color: hsl(0, 0%, 40%);
    text-decoration: none;
    &.active {
      border-bottom: 3px solid hsl(0, 0%, 60%)
    }
  }
`;

const Wizard = () => (
  <Fragment>
    <h2>Forms Wizard</h2>
    <div>
      <WizardNavigation>
        <WizardNavigationItem><NavLink to="/wizard/name" activeClassName="active">Name</NavLink></WizardNavigationItem>
        <WizardNavigationItem><NavLink to="/wizard/address" activeClassName="active">Address</NavLink></WizardNavigationItem>
      </WizardNavigation>
    </div>
    <Switch>
      <Route exact path="/wizard/name" render={() => <div>Capture name</div>} />
      <Route exact path="/wizard/address" render={() => <div>Capture address</div>} />
    </Switch>
  </Fragment>
);

export default Wizard;
