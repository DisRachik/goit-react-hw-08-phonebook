import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { ThreeCircles } from 'react-loader-spinner';
import { ContactForm, ContactList, Filter, Section } from 'components';

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading ? (
          <ThreeCircles
            wrapperStyle={{ display: `grid`, placeItems: `center` }}
          />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ContactList />
        )}
      </Section>
    </>
  );
};

export default Phonebook;
