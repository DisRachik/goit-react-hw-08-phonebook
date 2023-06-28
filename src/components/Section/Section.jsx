import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle, SectionSubtitle } from './Section.styled';

export const Section = ({ title, subtitle, children }) => (
  <SectionWrap>
    {title && <SectionTitle>{title}</SectionTitle>}
    {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
