import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList, Filter } from 'components';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
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
    </Layout>
  );
};
