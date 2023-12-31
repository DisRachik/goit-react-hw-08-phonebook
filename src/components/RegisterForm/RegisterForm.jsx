import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import { TfiUser, TfiEmail, TfiLock, TfiWrite } from 'react-icons/tfi';
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

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter a valid name'),
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

export const RegisterForm = () => {
  const { registerUser } = useAuth();

  const handleSubmit = (values, { resetForm }) => {
    registerUser(values)
      .then(() => {
        resetForm();
      })
      .catch(() => {
        toast.error('A user with that email address already exists');
      });
  };

  return (
    <Section title="Registration form">
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <span>Name</span>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <TfiUser size={24} />
          </FormField>
          <ErrorMessage name="name" component="div" />

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
            <span>Sign up</span>
            <TfiWrite size={24} />
          </ButtonForm>
        </Form>
      </Formik>
      <InformText>
        Already registered? Then - <Link to="/login">Log in</Link>
      </InformText>
    </Section>
  );
};
