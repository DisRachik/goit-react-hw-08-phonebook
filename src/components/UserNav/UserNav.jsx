import { useAuth } from 'redux/auth/useAuth';

import { ImExit } from 'react-icons/im';
import { WrapAuthNav } from 'components/AppBar/AppBar.styled';
import { BtnLogOut, Greeting } from './UserNav.styled';

export const UserNav = () => {
  const { user, userLogOut } = useAuth();

  return (
    <WrapAuthNav>
      <Greeting>Welcome, {user.name}.</Greeting>
      <BtnLogOut type="button" onClick={() => userLogOut()}>
        Log Out <ImExit size={22} />
      </BtnLogOut>
    </WrapAuthNav>
  );
};
