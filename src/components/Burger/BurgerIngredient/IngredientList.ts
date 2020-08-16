import IngredientTypes from './IngredientTypes';

type IngredientList = {
  [key in IngredientTypes]?: number;
};

type IngredientListProvider = {
  ingredients: IngredientList;
  setIngredients: (ingredients: IngredientList) => void;
};

export default IngredientList;
