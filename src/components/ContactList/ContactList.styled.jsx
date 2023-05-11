import styled from '@emotion/styled';

export const ContactItems = styled.ul`
  margin-top: ${props => props.theme.spacing(5)};

  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 0 ${props => props.theme.spacing(4)};
`;

export const ContactItem = styled.li`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(4)};

  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};

  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  border-bottom: 1px solid ${props => props.theme.colors.gray};

  svg {
    flex-shrink: 0;
  }
`;

export const BtnDelete = styled.button`
  flex-shrink: 0;

  margin-left: auto;
  padding: ${props => props.theme.spacing(1)};
  width: ${props => props.theme.spacing(12)};

  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 50%;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.red};
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;
