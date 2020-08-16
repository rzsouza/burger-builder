import React from 'react';
import classes from './BurgerIngredient.module.scss';
import IngredientType from './IngredientType';

const BurgerIngredient: React.FC<{ type: IngredientType }> = ({ type }) => {
  switch (type) {
    case IngredientType.BreadBottom:
      return <div className={classes.BreadBottom} />;
    case IngredientType.BreadTop:
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    case IngredientType.Meat:
      return <div className={classes.Meat} />;
    case IngredientType.Cheese:
      return <div className={classes.Cheese} />;
    case IngredientType.Salad:
      return <div className={classes.Salad} />;
    case IngredientType.Bacon:
      return <div className={classes.Bacon} />;
    default:
      return null;
  }
};

export default BurgerIngredient;
