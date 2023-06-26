import { Layout } from 'components/SharedLayout/Layout.styled';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Main page</NavLink>
            </li>
            <li>
              <NavLink to="/phonebook">Phonebook</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Layout>
        <Suspense fallback={<p>Ждемссс</p>}>
          <Outlet />
        </Suspense>
      </Layout>
    </>
  );
};

export default SharedLayout;
