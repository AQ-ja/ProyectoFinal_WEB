/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSpring, animated } from 'react-spring';

// eslint-disable-next-line no-unused-vars
function ProInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">Ver</a>
    </animated.div>
  );
}

export default ProInfo;
/*
Esta parte del codigo fue hecha con el siguente tutorial:
https://youtu.be/F2DsmQChKA0
*/
