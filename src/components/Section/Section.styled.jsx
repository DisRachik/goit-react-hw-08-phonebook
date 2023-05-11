import styled from '@emotion/styled';

export const SectionWrap = styled.section`
  width: 90%;
  max-width: ${props => props.theme.spacing(125)};
  margin: 0 auto;

  :not(:first-child) {
    margin-top: ${props => props.theme.spacing(5)};
  }
`;

export const SectionTitle = styled.h2`
  padding: ${props => props.theme.spacing(2)};
  text-align: center;

  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: ${props => props.theme.spacing(2)};
`;
