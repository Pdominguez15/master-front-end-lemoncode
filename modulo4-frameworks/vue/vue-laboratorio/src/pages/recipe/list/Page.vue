<template>
  <app-layout>
    <v-card-title class="text-h4">
      Recipes
    </v-card-title>
    <table-component :headers="headers" :recipes="recipes" />
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Header, Recipe } from "./viewModel";
import { TableComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, TableComponent },
  props: {
    headers: { required: true } as PropOptions<Header[]>,
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
});
</script>
