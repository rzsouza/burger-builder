import React, { Fragment, ReactElement } from 'react';
import IngredientList from '../BurgerIngredient/IngredientList';
import IngredientType from '../BurgerIngredient/IngredientType';
import Button from '../../UI/Button/Button';

const OrderSummary: React.FC<{
  ingredients: IngredientList;
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
}> = ({ ingredients, purchaseCancelled, purchaseContinued }) => {
  const ingredientSummary: ReactElement[] = [];

  let key: IngredientType;
  for (key in ingredients) {
    // noinspection JSUnfilteredForInLoop
    ingredientSummary.push(
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:{' '}
        {ingredients[key]}
      </li>
    );
  }

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCancelled} btnType={'Danger'}>
        CANCEL
      </Button>
      <Button clicked={purchaseContinued} btnType={'Success'}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
