import React, { Fragment } from 'react';

const layout: React.FC = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div> <main>{children}</main>
  </Fragment>
);

export default layout;
