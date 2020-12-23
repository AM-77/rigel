import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../containers/Footer';
import Image from '../../components/Image';
import { AboutWrapper, InnerWrapper, DivColumn, H1, H2, H4, P } from './style';

import avatar from '../../assets/images/avatar.jpg';

const About = () => {
  const { t } = useTranslation();
  return (
    <AboutWrapper>
      <InnerWrapper>
        <DivColumn className="title-wrapper">
          <H1>{t('about-title')}</H1>
          <DivColumn>
            <P className="about-content">{t('about-content')}</P>
          </DivColumn>
          <DivColumn className="avatar">
            <Image src={avatar} alt="me" />
          </DivColumn>
        </DivColumn>

        <DivColumn className="main-wrapper">
          <DivColumn className="head">
            <H2>{t('about-name')}</H2>
            <H4>{t('about-occupation')}</H4>
          </DivColumn>
          <DivColumn>
            <P className="about-main">{t('about-main-1')}</P>
            <P className="about-main">{t('about-main-2')}</P>
            <P className="about-main">{t('about-main-3')}</P>
            <P className="about-main">{t('about-main-4')}</P>
          </DivColumn>
        </DivColumn>
      </InnerWrapper>
      <Footer />
    </AboutWrapper>
  );
};

export default About;
