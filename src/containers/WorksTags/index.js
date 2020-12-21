import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TagButton from '../../components/TagButton';
import { uniqTags } from '../../utils/helpers';
import TagsWrapper from './style';

const WorksTags = ({ filterKey, setFilterKey }) => {
  const { t } = useTranslation();
  const [tags, setTags] = useState(['all']);
  const works = t('works', { returnObjects: true });

  useEffect(() => {
    setTags(['all', ...uniqTags(works)]);
  }, []);

  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <TagButton
          key={tag}
          content={tag}
          isActive={filterKey === tag || (filterKey === '*' && tag === 'all')}
          setFilterKey={setFilterKey}
        />
      ))}
    </TagsWrapper>
  );
};

WorksTags.propTypes = {
  filterKey: PropTypes.string.isRequired,
  setFilterKey: PropTypes.func.isRequired,
};

export default WorksTags;
