import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Banner.scss';

const Banner = ({ images = [] }) => {
  return (
    <div className="banner">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt || 'Banner image'} />
      ))}
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default Banner;
