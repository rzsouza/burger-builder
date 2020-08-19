import React, { Fragment, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientList, {
  IngredientListBoolean,
} from '../../components/Burger/BurgerIngredient/IngredientList';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import IngredientType from '../../components/Burger/BurgerIngredient/IngredientType';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES: IngredientList = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

type BurgerBuilderState = {
  ingredients: IngredientList;
  purchaseable: boolean;
  totalPrice: number;
  purchasing: boolean;
};

const BurgerBuilder = () => {
  const [state, setState] = useState<BurgerBuilderState>({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    purchaseable: false,
    totalPrice: 4,
    purchasing: false,
  });

  const updatePurchaseState = (updatedState: BurgerBuilderState) => {
    let purchaseable = false;
    let key: IngredientType;
    for (key in actualIngredients) {
      // noinspection JSUnfilteredForInLoop
      if ((actualIngredients[key] || 0) > 0) {
        purchaseable = true;
        break;
      }
    }

    updatedState['purchaseable'] = purchaseable;
    setState(updatedState);
  };

  const ingredientAddedHandler = (igType: IngredientType) => {
    const oldCount = state.ingredients[igType] || 0;
    const updatedCount = oldCount + 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = (INGREDIENT_PRICES[igType] || 0) + oldPrice;
    updatePurchaseState(updatedState);
  };

  const ingredientRemovedHandler = (igType: IngredientType) => {
    const oldCount = state.ingredients[igType] || 0;
    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updatedState = { ...state };
    const oldPrice = state.totalPrice || 0;
    updatedState.ingredients[igType] = updatedCount;
    updatedState.totalPrice = oldPrice - (INGREDIENT_PRICES[igType] || 0);
    updatePurchaseState(updatedState);
  };

  const purchaseHandler = () => {
    setState({ ...state, ...{ purchasing: true } });
  };

  const purchaseCancelHandler = () => {
    setState({ ...state, ...{ purchasing: false } });
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
      <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary ingredients={state.ingredients} />
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        price={state.totalPrice}
        ingredientAdded={ingredientAddedHandler}
        ingredientRemoved={ingredientRemovedHandler}
        disabledInfo={disabledInfo}
        purchaseable={state.purchaseable}
        ordered={purchaseHandler}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
