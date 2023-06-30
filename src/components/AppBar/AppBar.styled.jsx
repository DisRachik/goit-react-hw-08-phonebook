import styled from '@emotion/styled';
import { NavLink as RouteNavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(8)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};
  border-bottom: 2px solid ${props => props.theme.colors.accent};

  @media screen and (max-width: 767px) {
    padding: ${props => props.theme.spacing(2)};
    width: 100%;

    justify-content: center;
    flex-wrap: wrap;
    row-gap: ${props => props.theme.spacing(2)};
  }
`;

export const NavStile = styled.nav`
  flex-shrink: 0;

  @media screen and (max-width: 540px) {
  }
`;

export const NavigationSite = styled.ul`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};

  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing(2)};
  }
`;

export const Logo = styled(Link)`
  display: flex;
  gap: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.small};

  @media screen and (max-width: 767px) {
    h1 {
      display: none;
    }
  }
`;

export const NavLink = styled(RouteNavLink)`
  display: block;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

  text-align: center;

  background-color: ${props => props.theme.colors.blue};
  border: ${props => props.theme.spacing(0.25)} solid
    ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  transition: ${props =>
    props.theme.animation('background-color, box-shadow, color')};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.regular};
  }

  &.active {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.medium};
  }

  @media screen and (max-width: 540px) {
    padding: ${props => props.theme.spacing(2)};
  }
`;

export const WrapAuthNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(2)};

  a {
    min-width: ${props => props.theme.spacing(20)};
  }

  @media screen and (max-width: 540px) {
    gap: ${props => props.theme.spacing(2)};
    flex-shrink: 1;
  }
`;
