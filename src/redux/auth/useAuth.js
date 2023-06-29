import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, registrationFetch } from './operations';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from './selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  const registerUser = newUser => {
    return dispatch(registrationFetch(newUser)).unwrap();
  };
  const userLogIn = userData => {
    return dispatch(logIn(userData)).unwrap();
  };
  const userLogOut = () => {
    dispatch(logOut());
  };

  return {
    user,
    isLoggedIn,
    isRefreshing,
    registerUser,
    userLogIn,
    userLogOut,
  };
};
