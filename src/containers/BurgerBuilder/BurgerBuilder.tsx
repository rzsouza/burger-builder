import React, { Fragment, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientList from '../../components/Burger/BurgerIngredient/IngredientList';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = () => {
  const [ingredients] = useState<IngredientList>({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </Fragment>
  );
};

export default BurgerBuilder;
