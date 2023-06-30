import { useAuth } from 'redux/auth/useAuth';
import { AuthNav, UserMenu } from 'components';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  Header,
  Logo,
  NavigationSite,
  NavLink,
  NavStile,
} from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavStile>
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
          {isLoggedIn && (
            <li>
              <NavLink to="/phonebook">Phonebook</NavLink>
            </li>
          )}
        </NavigationSite>
      </NavStile>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
