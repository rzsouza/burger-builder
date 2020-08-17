import React from 'react';
import classes from './BurgerIngredient.module.scss';
import IngredientType from './IngredientType';

const BurgerIngredient: React.FC<{ igType: IngredientType }> = ({ igType }) => {
  switch (igType) {
    case 'bread-bottom':
      return <div className={classes.BreadBottom} />;
    case 'bread-top':
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    case 'meat':
      return <div className={classes.Meat} />;
    case 'cheese':
      return <div className={classes.Cheese} />;
    case 'salad':
      return <div className={classes.Salad} />;
    case 'bacon':
      return <div className={classes.Bacon} />;
    default:
      return null;
  }
};

export default BurgerIngredient;
