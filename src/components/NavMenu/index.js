import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Nav, StyledLink } from './style';

const NavBar = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <Nav>
      <StyledLink onClick={closeMenu} exact activeClassName="active" to="/">
        <span data-text={`${t('home')}.`}>{t('home')}.</span>
      </StyledLink>
      <StyledLink onClick={closeMenu} activeClassName="active" to="/about">
        <span data-text={`${t('about')}.`}>{t('about')}.</span>
      </StyledLink>
      <StyledLink onClick={closeMenu} activeClassName="active" to="/work">
        <span data-text={`${t('work')}.`}>{t('work')}.</span>
      </StyledLink>
      <StyledLink onClick={closeMenu} activeClassName="active" to="/contact">
        <span data-text={`${t('contact')}.`}>{t('contact')}.</span>
      </StyledLink>
    </Nav>
  );
};

NavBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default NavBar;
