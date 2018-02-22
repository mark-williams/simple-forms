import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WizardNavigation = styled.div`
  display: flex;
  flex-direction: row;
`;

const WizardNavigationItem = styled.div`
  margin-right: 1rem;
  margin-bottom: 1.6rem;
  div {
    font-size: 1.2rem;
    color: hsl(0, 0%, 40%);
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

class Wizard extends React.Component {
  state = { currentStep: 0 };

  makeStepMover = (increment) => () => this.setState((state) => ({ currentStep: state.currentStep + increment }));

  movePrev = this.makeStepMover(-1);

  moveNext = this.makeStepMover(1);

  render = () => {
    return (
      <Fragment>
        <h2>Forms Wizard</h2>
        <div>
          <WizardNavigation>
            { this.props.steps.map((s, i) => <WizardNavigationItem><div key={s.name} className={i === this.state.currentStep ? 'active' : null}>{s.name}</div></WizardNavigationItem>)}
          </WizardNavigation>
        </div>
        <StepContainer>
          <div>
            Step { this.state.currentStep}
          </div>
          <WizardButtons>
            <button onClick={this.movePrev}>Back</button>
            <button onClick={this.moveNext}>Next</button>
          </WizardButtons>
        </StepContainer>
      </Fragment>
    );
  }
}

Wizard.propTypes = {
  basePath: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.object)
};

export default Wizard;
