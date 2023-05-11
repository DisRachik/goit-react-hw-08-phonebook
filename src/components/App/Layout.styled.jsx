import styled from '@emotion/styled';

export const Layout = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.spacing(4)};

  background: ${props => props.theme.colors.mainBackground};
`;
