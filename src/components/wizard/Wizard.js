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

const StepContainer = styled.div`
  width: 600px;
`;
const WizardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const getPath = (basePath, stepName) => ( `${basePath}/${stepName}` );
class Wizard extends React.Component {
  state = { currentStep: 0 };

  makeStepMover = (increment) => () => this.setState((state) => ({ currentStep: state.currentStep + increment }));

  movePrev = this.makeStepMover(-1);

  moveNext = this.makeStepMover(1);

  render = () => {
    const { basePath } = this.props;

    return (
      <Fragment>
        <h2>Forms Wizard</h2>
        <div>
          <WizardNavigation>
            <WizardNavigationItem><NavLink to={getPath(basePath, 'name')} activeClassName="active">Name</NavLink></WizardNavigationItem>
            <WizardNavigationItem><NavLink to={getPath(basePath, 'address')} activeClassName="active">Address</NavLink></WizardNavigationItem>
          </WizardNavigation>
        </div>
        <StepContainer>
          <Switch>
            <Route exact path={getPath(basePath, 'name')} render={() => <div>Capture name</div>} />
            <Route exact path={getPath(basePath, 'address')} render={() => <div>Capture address</div>} />
          </Switch>
          <WizardButtons>
            <button onClick={this.movePrev}>Back</button>
            <button onClick={this.moveNext}>Next</button>
          </WizardButtons>
        </StepContainer>
        Current step is { this.state.currentStep }
      </Fragment>
    );
  }
}

Wizard.propTypes = {
  basePath: PropTypes.string
};

export default Wizard;
