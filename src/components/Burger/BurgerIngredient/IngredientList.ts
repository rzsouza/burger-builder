import IngredientType from './IngredientType';

type IngredientList = {
  [key in IngredientType]?: number;
};

type IngredientListProvider = {
  ingredients: IngredientList;
  setIngredients: (ingredients: IngredientList) => void;
};

export default IngredientList;
