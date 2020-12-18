import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Image from '../Image';
import TagButton from '../TagButton';
import { WorkCardWrapper, WorkCardLink, HoverCard, TitleLink } from './style';

const WorkCard = ({ id, title, cover, tag, setFilterKey }) => {
  const { t } = useTranslation();

  return (
    <WorkCardWrapper>
      <WorkCardLink to={`/work/details/${id}`}>
        <Image src={`/assets/images/works/${id}/${cover}`} alt={title} />
        <HoverCard>
          <i>{t('details')}</i>
        </HoverCard>
      </WorkCardLink>
      <TitleLink to={`/work/details/${id}`}>{title}</TitleLink>
      <TagButton setFilterKey={setFilterKey} content={tag} />
    </WorkCardWrapper>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  setFilterKey: PropTypes.func.isRequired,
};

export default WorkCard;
