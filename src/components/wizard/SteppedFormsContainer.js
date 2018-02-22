import React from 'react';
import PropTypes from 'prop-types';
import Wizard from './Wizard';

const steps = [
  { name: 'Name' },
  { name: 'Address' },
  { name: 'Additional' }
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
