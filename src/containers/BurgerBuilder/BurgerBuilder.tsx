import React, { Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

const burgerBuilder = () => (
  <Fragment>
    <Burger />
    <div>Build Controls</div>
  </Fragment>
);

export default burgerBuilder;
