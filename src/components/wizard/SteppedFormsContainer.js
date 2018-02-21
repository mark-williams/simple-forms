import React from 'react';
import PropTypes from 'prop-types';
import Wizard from './Wizard';

class SteppedFormsContainer extends React.Component {
  render = () => {
    const basePath = this.props.match.path;
    return (
      <Wizard basePath={basePath}/>
    );
  }
}

SteppedFormsContainer.propTypes = {
  match: PropTypes.object
};

export default SteppedFormsContainer;
