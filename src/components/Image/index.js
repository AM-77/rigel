import React from 'react';
import PropTypes from 'prop-types';
import ImageWrapper from './style';

const Image = ({ src, alt }) => (
  <ImageWrapper>
    <img src={src} alt={alt} />
  </ImageWrapper>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Image;
