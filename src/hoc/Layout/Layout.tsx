import React, { Fragment, useState } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout: React.FC = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{children}</main>
    </Fragment>
  );
};

export default Layout;
