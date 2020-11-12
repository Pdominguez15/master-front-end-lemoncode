<template>
  <app-layout>
    <v-img height="250" :src="recipe.image"></v-img>
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormComponent } from "./components";
import { FormProps } from "./formProps";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent },
  props: {
    recipe: { require: true },
    recipeError: { required: true },
    onUpdateRecipe: { require: true },
    onSave: { require: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
});
</script>
