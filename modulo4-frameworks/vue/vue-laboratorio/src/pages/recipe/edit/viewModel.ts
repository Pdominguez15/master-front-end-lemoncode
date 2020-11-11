import {
  ValidationResult,
  createDefaultValidationResult,
} from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  ingredients: [],
  description: "",
  image: "",
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
}
export type ResultEditError = Record<keyof RecipeError, boolean | string>;

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
});

export const createEmptyResultEditError = (): ResultEditError => ({
  name: "",
  ingredients: "",
  description: "",
});
