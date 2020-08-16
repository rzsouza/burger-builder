import React, { Fragment } from 'react';
import classes from './Layout.module.scss';

const layout: React.FC = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </Fragment>
);

export default layout;
