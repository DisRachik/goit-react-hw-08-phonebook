import styled from '@emotion/styled';
import { NavLink as RouteNavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(8)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.accent};
`;

export const NavigationSite = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(5)};
`;

export const NavLink = styled(RouteNavLink)`
  display: block;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};

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
`;
