import React from 'react';
import classes from './BuildControl.module.scss';

const BuildControl: React.FC<{ label: string }> = ({ label }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default BuildControl;
