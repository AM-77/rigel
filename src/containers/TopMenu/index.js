import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import useTop from '../../hooks/useTop';
import NavMenu from '../../components/NavMenu';
import {
  TopMenuWrapper,
  TopMenuContent,
  HireMe,
  HireMeTitle,
  HireMeContent,
  HireMeLink,
} from './style';

const TopMenu = ({ isMenuOpen, closeMenu }) => {
  const { t } = useTranslation();
  const top = useTop();

  return (
    <TopMenuWrapper className={`${isMenuOpen ? 'active' : ''}`} height={top}>
      <TopMenuContent>
        <NavMenu closeMenu={closeMenu} />

        <HireMe>
          <HireMeTitle>{t('hire-title')}</HireMeTitle>
          <HireMeContent>{t('hire-content')}</HireMeContent>
          <HireMeLink href={`mailto:${t('email')}`}>{t('email')}</HireMeLink>
        </HireMe>
      </TopMenuContent>
    </TopMenuWrapper>
  );
};

TopMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default TopMenu;
