import React, { useState, useEffect } from 'react';
import style from "../Home.module.css";
import PropTypes from 'prop-types';

const HomeSlider = ({ components, intervalTime = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === components.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [components.length, intervalTime]);

  const getSlideClassName = index =>
    `${style.slide} ${index === activeIndex ? style.active : ''}`;

  return (
    <>
      {components.map((Component, index) => (
        <div key={index} className={getSlideClassName(index)}>
          <Component key={index} />
        </div>
      ))}
    </>
  );
};

HomeSlider.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  intervalTime: PropTypes.number,
};

export default HomeSlider;
