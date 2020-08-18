import React, { Fragment, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientList, {
  IngredientListBoolean,
} from '../../components/Burger/BurgerIngredient/IngredientList';
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
    purchaseable: boolean;
    totalPrice: number;
  }>({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    purchaseable: false,
    totalPrice: 4,
  });

  const updatePurchaseState = () => {
    const actualIngredients = state.ingredients;
    let purchaseable = false;
    let key: IngredientType;
    for (key in actualIngredients) {
      // noinspection JSUnfilteredForInLoop
      if ((actualIngredients[key] || 0) > 0) {
        purchaseable = true;
        break;
      }
    }

    let nextState = { ...state };
    nextState['purchaseable'] = purchaseable;
    setState(nextState);
  };

  const ingredientAddedHandler = (igType: IngredientType) => {
    const oldCount = state.ingredients[igType] || 0;
    const updatedCount = oldCount + 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = (INGREDIENT_PRICES[igType] || 0) + oldPrice;
    setState(updatedState);
    updatePurchaseState();
  };

  const ingredientRemovedHandler = (igType: IngredientType) => {
    const oldCount = state.ingredients[igType] || 0;
    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = oldPrice - (INGREDIENT_PRICES[igType] || 0);
    setState(updatedState);
    updatePurchaseState();
  };

  const actualIngredients = state.ingredients;
  const disabledInfo: IngredientListBoolean = {};
  let key: IngredientType;
  for (key in actualIngredients) {
    // noinspection JSUnfilteredForInLoop
    disabledInfo[key] = (actualIngredients[key] || 0) <= 0;
  }

  return (
    <Fragment>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        price={state.totalPrice}
        ingredientAdded={ingredientAddedHandler}
        ingredientRemoved={ingredientRemovedHandler}
        disabledInfo={disabledInfo}
        purchaseable={state.purchaseable}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
