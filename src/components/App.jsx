import { lazy } from 'react';

import { LoginForm, RegisterForm, SharedLayout } from 'components';

import { Navigate, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="phonebook" element={<Phonebook />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="login" element={<LoginForm />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
