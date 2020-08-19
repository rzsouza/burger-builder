import React, { Fragment, ReactElement } from 'react';
import IngredientList from '../BurgerIngredient/IngredientList';
import IngredientType from '../BurgerIngredient/IngredientType';

const OrderSummary: React.FC<{ ingredients: IngredientList }> = ({
  ingredients,
}) => {
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
    </Fragment>
  );
};

export default OrderSummary;
