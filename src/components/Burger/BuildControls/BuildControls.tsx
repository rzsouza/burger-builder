import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import IngredientType from '../BurgerIngredient/IngredientType';
import { IngredientListBoolean } from '../BurgerIngredient/IngredientList';

const controls: { label: string; type: IngredientType }[] = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

type IngredientToVoidFunction = (igType: IngredientType) => void;

const BuildControls: React.FC<{
  ingredientAdded: IngredientToVoidFunction;
  ingredientRemoved: IngredientToVoidFunction;
  disabledInfo: IngredientListBoolean;
}> = ({ ingredientAdded, ingredientRemoved, disabledInfo }) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabledInfo[ctrl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
