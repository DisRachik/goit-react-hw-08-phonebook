import { Header, NavigationSite, NavLink } from './AppBar.styled';

export const AppBar = () => {
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
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </Header>
  );
};
