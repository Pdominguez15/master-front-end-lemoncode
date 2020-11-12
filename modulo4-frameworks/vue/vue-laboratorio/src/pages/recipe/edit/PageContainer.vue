<template>
  <div>
    <recipe-edit-page
      v-bind="{
        recipe,
        recipeError,
        onUpdateRecipe,
        onAddIngredient,
        onSave,
        onRemoveIngredient,
      }"
    />
    <snackbar
      :open="openSnackbar"
      :message="messageError"
      :onClose="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { fetchRecipeById, save } from "../../../rest-api/api/recipe";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";

import { Snackbar } from "../../../common/components";
export default Vue.extend({
  name: "RecipeEditPageContainer",
  components: { RecipeEditPage, Snackbar },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      openSnackbar: false,
      messageError: "",
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);

    this.openSnackbar = false;
    fetchRecipeById(id)
      .then((recipe) => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch((error) => {
        this.openSnackbar = true;
        this.messageError = "Error al cargar la receta";
      });
  },
  methods: {
    onUpdateRecipe(field: string, value: string) {
      this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    onSave() {
      this.openSnackbar = false;
      validations.validateForm(this.recipe).then((result) => {
        if (result.succeeded) {
          const recipe = mapRecipeVmToModel(this.recipe);
          save(recipe)
            .then((message) => {
              this.$router.back();
            })
            .catch((error) => {
              this.openSnackbar = true;
              this.messageError = "Error al guardar la receta";
            });
        } else {
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
        }
      });
    },
    onAddIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: [...this.recipe.ingredients, ingredient],
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    onRemoveIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter(
          (item) => item !== ingredient
        ),
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    validateRecipeField(field, value) {
      validations
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    updateRecipeError(field, result) {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
    },
    closeModal() {
      this.openSnackbar = false;
    },
  },
});
</script>
