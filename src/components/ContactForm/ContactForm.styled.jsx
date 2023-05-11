import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  margin-top: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(2)};

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.cardBackground};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(4)} 0;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};

  cursor: pointer;

  span {
    color: ${props => props.theme.colors.light};
  }
`;

export const Field = styled(FormikField)`
  height: ${props => props.theme.spacing(10)};

  border-radius: ${props => props.theme.spacing(2)};

  :focus {
    outline: ${props => props.theme.spacing(0.5)} solid
      ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const ErrorMessage = styled(FormikError)`
  align-self: start;

  margin-top: ${props => props.theme.spacing(2)};
  margin-left: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(4)};
  display: inline-block;

  outline: 1px solid ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.red};

  border-radius: ${props => props.theme.spacing(2)};
`;

export const ButtonForm = styled.button`
  min-width: ${props => props.theme.spacing(16)};
  margin: ${props => props.theme.spacing(5)} auto 0;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

  text-transform: capitalize;
  font-size: ${props => props.theme.fontSizes.small};

  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1.5)};

  font-weight: 700;

  background-color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.medium};

  transition: ${props => props.theme.animation('background-color, box-shadow')};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.green};
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;
