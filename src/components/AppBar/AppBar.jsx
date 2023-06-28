import { useAuth } from 'redux/auth/useAuth';
import { Header, NavigationSite, NavLink } from './AppBar.styled';
import { AuthNav, UserNav } from 'components';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <nav>
        <NavigationSite>
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
