import { Formik } from 'formik';
import * as Yup from 'yup';

import { TfiEmail, TfiLock, TfiShare } from 'react-icons/tfi';
import { Section } from 'components';
import {
  Form,
  FormField,
  Field,
  ButtonForm,
  ErrorMessage,
  InformText,
} from 'styles';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters long')
    .max(16, 'Too Long!')
    .required(
      'Must be at least 8 characters long and not exceed 16 characters.'
    ),
});

export const LoginForm = () => {
  return (
    <Section title="Log in">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {}}
      >
        <Form>
          <FormField>
            <span>Email</span>
            <Field
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address. For example, `example@example.com`"
              required
            />
            <TfiEmail size={24} />
          </FormField>
          <ErrorMessage name="email" component="div" />

          <FormField>
            <span>Password</span>
            <Field type="password" name="password" required />
            <TfiLock size={24} />
          </FormField>
          <ErrorMessage name="password" component="div" />

          <ButtonForm type="submit">
            <span>Log In</span>
            <TfiShare size={24} />
          </ButtonForm>
        </Form>
      </Formik>
      <InformText>
        Haven't registered yet? Then - <Link to="/register">Register</Link>
      </InformText>
    </Section>
  );
};
