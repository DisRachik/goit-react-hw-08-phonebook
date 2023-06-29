import styled from '@emotion/styled';

export const Greeting = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
`;

export const BtnLogOut = styled.button`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  text-transform: capitalize;

  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.medium};

  transition: ${props => props.theme.animation('background-color, box-shadow')};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.red};
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;
