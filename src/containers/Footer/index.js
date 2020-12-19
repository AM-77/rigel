import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterWrapper,
  InnerWrapper,
  Links,
  Link,
  Rights,
  RightsContent,
} from './style';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <InnerWrapper>
        <Links>
          <Link className="facebook" href={t('facebook')}>
            Facebook
          </Link>
          <Link className="twitter" href={t('twitter')}>
            Twitter
          </Link>
          <Link className="instagram" href={t('instagram')}>
            Instagram
          </Link>
          <Link className="linkedin" href={t('linkedin')}>
            LinkedIn
          </Link>
          <Link className="github" href={t('github')}>
            GitHub
          </Link>
          <Link className="behance" href={t('behance')}>
            Behance
          </Link>
          <Link className="dribbble" href={t('dribbble')}>
            Dribbble
          </Link>
        </Links>
        <Rights>
          <RightsContent>© Copyright 2020</RightsContent>
          <RightsContent className="separator">|</RightsContent>
          <RightsContent>
            <Link className="theme" href="https://amine.js.org">
              Rigel Theme
            </Link>
            by
            <Link className="author" href="https://amine.js.org">
              AM-77
            </Link>
          </RightsContent>
        </Rights>
      </InnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;
