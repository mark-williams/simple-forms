import React from 'react';
import PropTypes from 'prop-types';
import Wizard from './Wizard';

const steps = [
  { name: 'Name', render: () => <h4>Capture name</h4> },
  { name: 'Address', render: () => <h4>Capture address</h4> },
  { name: 'Additional', render: () => <h4>Capture additional details</h4> }
];

class SteppedFormsContainer extends React.Component {
  render = () => {
    const basePath = this.props.match.path;
    return (
      <Wizard basePath={basePath} steps={steps} />
    );
  }
}

SteppedFormsContainer.propTypes = {
  match: PropTypes.object
};

export default SteppedFormsContainer;
