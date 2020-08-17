import IngredientType from './IngredientType';

type IngredientList = {
  [key in IngredientType]?: number;
};

export type IngredientListBoolean = {
  [key in IngredientType]?: boolean;
};

type IngredientListProvider = {
  ingredients: IngredientList;
  setIngredients: (ingredients: IngredientList) => void;
};

export default IngredientList;
