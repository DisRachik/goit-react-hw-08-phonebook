import styled from '@emotion/styled';

export const SectionWrap = styled.section`
  width: 90%;
  max-width: ${props => props.theme.spacing(125)};
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing(8)};

  @media screen and (max-width: 540px) {
    width: 98%;
  }
`;

export const SectionTitle = styled.h2`
  padding: ${props => props.theme.spacing(2)};
  text-align: center;

  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: ${props => props.theme.spacing(2)};
`;

export const SectionSubtitle = styled.p`
  margin-top: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(2)};
  text-align: center;
  color: ${props => props.theme.colors.green};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;
