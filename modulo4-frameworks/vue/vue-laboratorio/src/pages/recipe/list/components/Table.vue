<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
    ></v-text-field>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="recipes"
        :search="search"
        :class="$style.table"
      >
        <template v-slot:[`item.controls`]="{ item }">
          <v-icon small class="mr-2" @click="edit(item.id)">mdi-pencil</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions, VueConstructor } from "vue";
import { baseRoutes } from "../../../../router";
import { Recipe, Header } from "../viewModel";

export default (Vue as VueConstructor<Vue & { $style }>).extend({
  name: "TableComponent",
  data() {
    return {
      search: "",
    };
  },
  props: {
    headers: { required: true } as PropOptions<Header[]>,
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  methods: {
    edit(id) {
      this.$router.push({ path: `${baseRoutes.recipe}/${id}` });
    },
  },
});
</script>

<style module>
.table tr td {
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
