import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../containers/Footer';
import {
  ContactWrapper,
  InnerWrapper,
  InputsWrapper,
  TextareaWrapper,
  InputWrapper,
  DivColumn,
  DivRow,
  H1,
  P,
  Label,
  Input,
  Form,
  Textarea,
  Button,
} from './style';

const Contact = () => {
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactWrapper>
      <InnerWrapper>
        <DivColumn className="title-wrapper">
          <H1>{t('contact-title')}</H1>
          <DivColumn>
            <P>
              {t('contact-content-1')}{' '}
              <a href={`mailto: ${t('email')}`}>{t('email')}</a>{' '}
              {t('contact-content-2')}{' '}
              <a href={`phone: ${t('phone')}`}>{t('phone')}</a>
            </P>
          </DivColumn>
        </DivColumn>
        <DivRow>
          <Form onSubmit={onSubmit}>
            <InputsWrapper>
              <InputWrapper>
                <Label htmlFor="name">{t('contact-name')}.</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('contact-name-ph')}
                />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="email">{t('contact-email')}.</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact-email-ph')}
                />
              </InputWrapper>
            </InputsWrapper>

            <TextareaWrapper>
              <Label className="label-textarea" htmlFor="message">
                {t('contact-message')}.
              </Label>
              <Textarea id="message" placeholder={t('contact-message-ph')} />
            </TextareaWrapper>
            <Button type="submit">{t('contact-send')}.</Button>
          </Form>
        </DivRow>
      </InnerWrapper>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;
