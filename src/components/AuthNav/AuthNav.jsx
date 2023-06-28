import { NavLink, WrapAuthNav } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </WrapAuthNav>
  );
};
