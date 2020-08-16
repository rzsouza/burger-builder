import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import IngredientType from './BurgerIngredient/IngredientType';

const Burger = () => (
  <div className={classes.Burger}>
    <BurgerIngredient type={IngredientType.BreadTop} />
    <BurgerIngredient type={IngredientType.Cheese} />
    <BurgerIngredient type={IngredientType.Meat} />
    <BurgerIngredient type={IngredientType.BreadBottom} />
  </div>
);

export default Burger;
