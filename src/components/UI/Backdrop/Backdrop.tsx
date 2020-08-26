import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop: React.FC<{ show: boolean; clicked?: () => void }> = ({
  show,
  clicked,
}) => (show ? <div className={classes.Backdrop} onClick={clicked} /> : null);

export default Backdrop;
