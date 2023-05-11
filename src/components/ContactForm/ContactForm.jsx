import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { RiUserAddFill } from 'react-icons/ri';
import {
  Form,
  FormField,
  Field,
  ButtonForm,
  ErrorMessage,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a valid name'),
  number: Yup.string().required('Please enter a tel number'),
});

export const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={ContactSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit({ ...values, id: nanoid() });
      resetForm();
    }}
  >
    <Form>
      <FormField>
        <span>Name</span>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormField>
      <FormField>
        <span>Number</span>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormField>
      <ErrorMessage name="number" component="div" />

      <ButtonForm type="submit">
        <RiUserAddFill size={24} />
        <span>Add contact</span>
      </ButtonForm>
    </Form>
  </Formik>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
