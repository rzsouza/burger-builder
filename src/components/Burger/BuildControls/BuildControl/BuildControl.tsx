import React from 'react';
import classes from './BuildControl.module.scss';
import IngredientType from '../../BurgerIngredient/IngredientType';

const BuildControl: React.FC<{
  label: string;
  type: IngredientType;
  added: (igType: IngredientType) => void;
}> = ({ label, type, added }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More} onClick={() => added(type)}>
      More
    </button>
  </div>
);

export default BuildControl;
