import { Layout } from 'components/App/Layout.styled';
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
