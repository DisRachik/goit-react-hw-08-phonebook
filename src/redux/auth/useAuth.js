import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, registrationFetch } from './operations';
import { selectIsLoggedIn, selectUser } from './selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const registerUser = newUser => {
    dispatch(registrationFetch(newUser));
  };
  const userLogIn = user => {
    dispatch(logIn(user));
  };
  const userLogOut = () => {
    dispatch(logOut());
  };

  return { user, isLoggedIn, registerUser, userLogIn, userLogOut };
};
