import styled from '@emotion/styled';

export const FilterWrap = styled.label`
  margin-top: ${props => props.theme.spacing(5)};

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};

  cursor: pointer;

  span {
    padding-left: ${props => props.theme.spacing(2)};

    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
    color: ${props => props.theme.colors.accent};
  }
`;

export const FilterArea = styled.input`
  height: ${props => props.theme.spacing(10)};

  border-radius: ${props => props.theme.spacing(2)};

  :focus {
    border: none;
    outline: ${props => props.theme.spacing(0.5)} solid
      ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
