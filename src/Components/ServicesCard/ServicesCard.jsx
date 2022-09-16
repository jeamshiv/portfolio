import React from 'react';

export default function ServicesCard(props) {
  return (
    <div className="col-lg-4 wow fadeInUp" data-wow-delay={props.animeDelay}>
      <div className={`p-5 m-4 ${props.classname}`}>
        <img src={props.icon} className="img-fluid pb-2" alt="Services" />
        <h4>{props.title}</h4>
        <p>{props.des}</p>
      </div>
    </div>
  );
}
