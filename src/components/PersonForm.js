import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 2rem;
  width: 600px;
`;

const FormHeading = styled.h3`
  margin-top: 0;
`;

const FormBlock = styled.div`
  border: 0px solid pink;
  margin-bottom: 0.8rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
`;

const ItemLabel = styled.label`
  color: #666;
  flex: 2;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const ItemCapture = styled.input`
  flex: 7;
  font-size: 1rem;
  padding-left: 0.4rem;
`;

const PersonForm = () => (
  <Form>
    <FormHeading>Your details</FormHeading>
    <FormBlock>
      <ItemLabel htmlFor="firstName">First name</ItemLabel>
      <ItemCapture id="firstName" type="text" />
    </FormBlock>
    <FormBlock>
      <ItemLabel htmlFor="secondName">Second name</ItemLabel>
      <ItemCapture id="secondName" type="text" />
    </FormBlock>
  </Form>
);

export default PersonForm;

