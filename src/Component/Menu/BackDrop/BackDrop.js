import React from 'react';
import './Backdrop.css';

const BackDrop=(props)=>(
    <div className="backdrop" onClick={props.click} />
);

export default BackDrop;