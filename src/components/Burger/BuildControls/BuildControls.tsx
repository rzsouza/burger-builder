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
  purchaseable: boolean;
  price: number;
}> = ({
  ingredientAdded,
  ingredientRemoved,
  disabledInfo,
  purchaseable,
  price,
}) => {
  console.log(purchaseable);
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabledInfo[ctrl.type]}
        />
      ))}
      <button disabled={!purchaseable} className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
