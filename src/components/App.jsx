import { lazy } from 'react';

import { SharedLayout } from 'components';

import { Navigate, Route, Routes } from 'react-router-dom';
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="phonebook" element={<Phonebook />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
