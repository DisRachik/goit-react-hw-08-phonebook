import { useAuth } from 'redux/auth/useAuth';
import { Section } from 'components';

const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <Section
      title="Welcome to the PhoneBook!"
      subtitle={
        !isLoggedIn
          ? 'Please login or register to access the functionality...'
          : `Welcome back, ${user.name}!`
      }
    ></Section>
  );
};

export default Home;
