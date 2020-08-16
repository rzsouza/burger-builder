import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import IngredientList from './BurgerIngredient/IngredientList';
import IngredientTypes from './BurgerIngredient/IngredientTypes';

const Burger: React.FC<{ ingredients: IngredientList }> = ({ ingredients }) => {
  const transformedIngredients = (Object.keys(
    ingredients
  ) as IngredientTypes[]).map((igKey: IngredientTypes) =>
    [...Array(ingredients[igKey])].map((_, i: number) => (
      <BurgerIngredient key={igKey + i} igType={igKey} />
    ))
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient igType={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient igType={'bread-bottom'} />
    </div>
  );
};

export default Burger;
