import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import IngredientList from './BurgerIngredient/IngredientList';
import IngredientType from './BurgerIngredient/IngredientType';

const Burger: React.FC<{ ingredients: IngredientList }> = ({ ingredients }) => {
  let transformedIngredients: JSX.Element[] | JSX.Element = (Object.keys(
    ingredients
  ) as IngredientType[])
    .map((igKey: IngredientType) =>
      [...Array(ingredients[igKey])].map((_, i: number) => (
        <BurgerIngredient key={igKey + i} igType={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient igType={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient igType={'bread-bottom'} />
    </div>
  );
};

export default Burger;
