import React, { Fragment, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientList from '../../components/Burger/BurgerIngredient/IngredientList';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import IngredientType from '../../components/Burger/BurgerIngredient/IngredientType';

const INGREDIENT_PRICES: IngredientList = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [state, setState] = useState<{
    ingredients: IngredientList;
    totalPrice: number;
  }>({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    totalPrice: 4,
  });

  const ingredientAddedHandler = (igType: IngredientType) => {
    console.log('added');
    const oldCount = state.ingredients[igType] || 0;
    const updatedCount = oldCount + 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = (INGREDIENT_PRICES[igType] || 0) + oldPrice;
    setState(updatedState);
  };

  const removeIngredientHandler = (igType: IngredientType) => {
    const oldCount = state.ingredients[igType] || 0;
    const updatedCount = oldCount - 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = oldPrice - (INGREDIENT_PRICES[igType] || 0);
    setState(updatedState);
  };

  return (
    <Fragment>
      <Burger ingredients={state.ingredients} />
      <BuildControls ingredientAdded={ingredientAddedHandler} />
    </Fragment>
  );
};

export default BurgerBuilder;
