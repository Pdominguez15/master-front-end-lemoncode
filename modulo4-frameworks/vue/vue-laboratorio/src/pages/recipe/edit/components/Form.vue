<template>
  <v-form>
    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultRecipeError.name]"
      @input="(name) => onUpdateRecipe('name', name)"
      @click:append="onAddIngredient(ingredient)"
    />

    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      @click:append="onAddIngredient(ingredient)"
    />

    <ingredient-list-component
      :ingredients="recipe.ingredients"
      :on-remove-ingredient="onRemoveIngredient"
    />

    <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    >

    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.description"
      :rules="[resultRecipeError.description]"
      :no-resize="true"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>

    <v-btn
      type="button"
      color="success"
      :disabled="isDisabled"
      @click.prevent="onSave"
      >Save</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import IngredientListComponent from "./IngredientList.vue";
import { FormProps } from "../formProps";
import { createEmptyResultEditError, ResultEditError } from "../viewModel";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientListComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
      isDisabled: false,
    };
  },
  computed: {
    resultRecipeError(): ResultEditError {
      let errorList = Object.keys(this.recipeError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.recipeError[item as keyof ResultEditError].succeeded ||
            this.recipeError[item as keyof ResultEditError].message,
        }),
        {} as ResultEditError
      );
      if (
        errorList.name !== true ||
        errorList.ingredients !== true ||
        errorList.description !== true
      ) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }

      return errorList;
    },
  },
});
</script>
