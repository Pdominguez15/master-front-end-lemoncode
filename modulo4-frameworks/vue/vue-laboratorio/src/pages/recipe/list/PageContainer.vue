<template>
  <div>
    <recipe-list-page v-bind="{ headers, recipes: recipes }" />
    <snackbar
      :open="openSnackbar"
      :message="messageError"
      :onClose="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//Api
import { fetchRecipes } from "../../../rest-api/api/recipe";

//Componentes
import RecipeListPage from "./Page.vue";
import { Snackbar } from "../../../common/components/";

//Metodos
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe, Header } from "./viewModel";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
    Snackbar,
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
      openSnackbar: false,
      messageError: "Error al cargar las recetas.",
    };
  },
  created() {
    this.openSnackbar = false;
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch((error) => (this.openSnackbar = true));
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
    closeModal() {
      this.openSnackbar = false;
    },
  },
});
</script>
