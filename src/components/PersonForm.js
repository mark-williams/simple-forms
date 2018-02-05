import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { PropTypes } from 'prop-types';
import { colours } from '../style';

const Form = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 1.5rem;
  width: 600px;
`;

const FormHeading = styled.h3`
  margin-top: 0;
`;

const FormBlock = styled.div`
  margin-bottom: 0.8rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  &.buttons {
    margin-top: 2rem;
  }
`;

const ItemLabel = styled.label`
  color: ${colours.formLabel};
  flex: 2;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const ItemCapture = styled.div`
  display: flex;
  flex: 7;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  input {
    color: ${colours.formInput}; 
    width: 100%;
    padding-left: 0.4rem;
    font-size: 1rem;
  }
  input[type=checkbox] {
    width: auto;
    padding-left: 0;
    margin-left: 0;
  }
`;

const PrimaryButton = styled.button`
  border-width: 0;
  background-color: hsl(130, 78%, 40%);
  color: white;
  width: 10rem;
`;

const PersonForm = ({ handleSubmit }) => (
  <Form>
    <FormHeading>Your details</FormHeading>
    <FormBlock>
      <ItemLabel htmlFor="firstName">First name</ItemLabel>
      <ItemCapture><Field id="firstName" name="firstName" component="input" type="text" /></ItemCapture>
    </FormBlock>
    <FormBlock>
      <ItemLabel htmlFor="secondName">Second name</ItemLabel>
      <ItemCapture><Field id="secondName" name="secondName" component="input" type="text" /></ItemCapture>
    </FormBlock>
    <FormBlock className="buttons">
      <ItemLabel />
      <PrimaryButton onClick={handleSubmit}>OK</PrimaryButton>
    </FormBlock>
  </Form>
);

PersonForm.propTypes = {
  handleSubmit: PropTypes.func
};

const onSubmit = (data) => {
  // eslint-disable-next-line
  console.log(data);
};

const wrappedForm = reduxForm({ form: 'person', onSubmit })(PersonForm);
export default wrappedForm;

