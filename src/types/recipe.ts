export interface Ingredient {
  uuid: string;
  amount: number;
  measurement: string;
  name: string;
}

export interface Direction {
  instructions: string;
  optional?: boolean;
}

export interface RecipeType {
  uuid: string;
  title: string;
  description: string;
  images: {
    full: string;
    medium: string;
    small: string;
  };
  servings: number;
  prepTime: number;
  cookTime: number;
  postDate: Date;
  editDate: Date;
  ingredients: Array<Ingredient>;
  directions: Array<Direction>;
}
