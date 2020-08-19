import React, { Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout: React.FC = ({ children }) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </Fragment>
);

export default layout;
