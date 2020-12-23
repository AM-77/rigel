import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../containers/Footer';
import WorksTags from '../../containers/WorksTags';
import WorksList from '../../containers/WorksList';

import { WorkWrapper, InnerWrapper, DivColumn, H1, P } from './style';

const Work = () => {
  const [filterKey, setFilterKey] = useState('*');
  const { t } = useTranslation();

  return (
    <WorkWrapper>
      <InnerWrapper>
        <DivColumn className="title-wrapper">
          <H1>{t('work-title')}</H1>
          <DivColumn>
            <P className="work-content">{t('work-content')}</P>
          </DivColumn>
        </DivColumn>

        <DivColumn>
          <WorksTags filterKey={filterKey} setFilterKey={setFilterKey} />
          <WorksList filterKey={filterKey} setFilterKey={setFilterKey} />
        </DivColumn>
      </InnerWrapper>
      <Footer />
    </WorkWrapper>
  );
};

export default Work;
