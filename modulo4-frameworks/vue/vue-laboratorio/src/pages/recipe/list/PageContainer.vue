<template>
  <recipe-list-page v-bind="{ headers, recipes: recipes }" />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe, Header } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      headers: [
        { text: "Name ", value: "name", align: "center" },
        { text: "Description ", value: "description", align: "center" },
        {
          text: "Controls ",
          value: "controls",
          filterable: false,
          align: "center",
        },
      ] as Header[],
      recipes: [] as Recipe[],
      searchText: "",
    };
  },
  created() {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
  },
});
</script>
