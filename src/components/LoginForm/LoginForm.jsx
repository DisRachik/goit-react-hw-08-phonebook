import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

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
import { useAuth } from 'redux/auth/useAuth';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email'),
  password: Yup.string()
    .min(7, 'Must be at least 7 characters long')
    .max(16, 'Too Long!')
    .required(
      'Must be at least 8 characters long and not exceed 16 characters.'
    ),
});

export const LoginForm = () => {
  const { userLogIn } = useAuth();
  const handleSubmit = (values, { resetForm }) => {
    userLogIn(values)
      .then(() => {
        resetForm();
      })
      .catch(() => {
        toast.error('Invalid e-mail or password. Try again.');
      });
  };

  return (
    <Section title="Log in">
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <span>Email</span>
            <Field type="email" name="email" required />
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
