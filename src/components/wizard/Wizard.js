import React, { Fragment } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const getPath = (basePath, stepName) => ( `${basePath}/${stepName}` );
const Wizard = ({ match }) => {
  const basePath = match.path;
  return (
    <Fragment>
      <h2>Forms Wizard</h2>
      <div>
        <WizardNavigation>
          <WizardNavigationItem><NavLink to={getPath(basePath, 'name')} activeClassName="active">Name</NavLink></WizardNavigationItem>
          <WizardNavigationItem><NavLink to={getPath(basePath, 'address')} activeClassName="active">Address</NavLink></WizardNavigationItem>
        </WizardNavigation>
      </div>
      <Switch>
        <Route exact path={getPath(basePath, 'name')} render={() => <div>Capture name</div>} />
        <Route exact path={getPath(basePath, 'address')} render={() => <div>Capture address</div>} />
      </Switch>
    </Fragment>
  );
};

Wizard.propTypes = {
  match: PropTypes.object
};

export default Wizard;
