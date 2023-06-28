import { useAuth } from 'redux/auth/useAuth';
import { AuthNav, UserNav } from 'components';
import { RiContactsBookLine } from 'react-icons/ri';
import { Header, Logo, NavigationSite, NavLink } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <nav>
        <NavigationSite>
          <li>
            <Logo to="/">
              <RiContactsBookLine size={30} />
              <h1>PhoneBook</h1>
            </Logo>
          </li>
          <li>
            <NavLink to="/">Main page</NavLink>
          </li>
          <li>
            <NavLink to="/phonebook">Phonebook</NavLink>
          </li>
        </NavigationSite>
      </nav>

      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Header>
  );
};
