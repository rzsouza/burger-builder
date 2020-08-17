import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import IngredientType from '../BurgerIngredient/IngredientType';

const controls: { label: string; type: IngredientType }[] = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls: React.FC<{
  ingredientAdded: (igType: IngredientType) => void;
}> = ({ ingredientAdded }) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
