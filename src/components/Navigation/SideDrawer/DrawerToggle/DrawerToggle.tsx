import React from 'react';
import classes from './DrawerToggle.module.scss';

const DrawerToggle: React.FC<{ clicked: () => void }> = ({ clicked }) => (
  <div className={classes.DrawerToggle} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default DrawerToggle;
