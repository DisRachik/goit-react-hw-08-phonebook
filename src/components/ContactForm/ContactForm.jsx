import { Formik } from 'formik';
import * as Yup from 'yup';

import { RiUserAddFill } from 'react-icons/ri';
import { Form, FormField, Field, ButtonForm, ErrorMessage } from 'styles';
import { useContacts } from 'redux/contacts/useContacts';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a valid name'),
  number: Yup.string().required('Please enter a tel number'),
});

export const ContactForm = () => {
  const { contacts, addNewContact } = useContacts();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        if (
          contacts.find(
            ({ name }) => name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          alert(`${values.name} is already in contacts`);
          return;
        }

        addNewContact(values);
        resetForm();
      }}
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
        </FormField>
        <ErrorMessage name="name" component="div" />

        <FormField>
          <span>Number</span>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
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
};
