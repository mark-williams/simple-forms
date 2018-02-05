import styled from 'styled-components';

const colours = {
  sectionHeader: 'hsl(240, 32%, 52%)',
  bodyText: 'hsl(0, 0%, 32%)',
  formLabel: 'hsl(0, 0%, 52%)',
  formInput: 'hsl(0, 0%, 12%)'
};

const SectionHead = styled.h1`
  font-size: 2rem;  
  color: ${colours.sectionHeader};
`;

const Section = styled.div`
  text-align: left;
  color: ${colours.bodyText};
  line-height: 1.4;
`;

export { Section, SectionHead, colours };
