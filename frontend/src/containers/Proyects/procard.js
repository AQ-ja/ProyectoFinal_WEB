/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProInfo from './proinfo';

function ProCard(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
      <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <ProInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
    </div>
  );
}

export default ProCard;
/*
Esta parte del codigo fue hecha con el siguente tutorial:
https://youtu.be/F2DsmQChKA0
*/
