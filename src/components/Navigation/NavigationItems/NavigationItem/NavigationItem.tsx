import React from 'react';
import classes from './NavigationItem.module.scss';

const NavigationItem: React.FC<{
  link: string;
  active: boolean;
}> = ({ link, active, children }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : undefined}>
      {children}
    </a>
  </li>
);
export default NavigationItem;
