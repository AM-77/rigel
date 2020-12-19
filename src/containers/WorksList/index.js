import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Isotope from 'isotope-layout';
import WorkCard from '../../components/WorkCard';

import { ListWrapper, StyledWorkCard } from './style';

const WorksList = ({ filterKey, setFilterKey }) => {
  const { t } = useTranslation();
  const [isotope, setIsotope] = useState(null);
  const works = t('works', { returnObjects: true });

  useEffect(() => {
    setTimeout(() => {
      setIsotope(
        new Isotope('.filter-container', {
          itemSelector: '.filter-item',
          layoutMode: 'fitRows',
          transitionDuration: '0.5s',
        })
      );
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope) {
      if (filterKey === '*') {
        isotope.arrange({ filter: `*` });
      } else {
        isotope.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [isotope, filterKey]);

  return (
    <ListWrapper className="filter-container">
      {works.map(({ id, title, cover, tag }) => (
        <StyledWorkCard key={id} className={`filter-item ${tag}`}>
          <WorkCard
            id={id}
            title={title}
            cover={cover}
            tag={tag}
            setFilterKey={setFilterKey}
          />
        </StyledWorkCard>
      ))}
    </ListWrapper>
  );
};

WorksList.propTypes = {
  filterKey: PropTypes.string.isRequired,
  setFilterKey: PropTypes.func.isRequired,
};

export default WorksList;
