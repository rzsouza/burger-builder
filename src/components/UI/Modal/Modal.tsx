import React, { Fragment, ReactNode } from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal: React.FC<{
  show: boolean;
  modalClosed: () => void;
  children?: ReactNode;
}> = ({ show, children, modalClosed }) => (
  <Fragment>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default React.memo(Modal);
