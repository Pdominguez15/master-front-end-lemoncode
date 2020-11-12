<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title>Recipe App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div :class="$style.logout">
        <span>Bienvenido, {{ getUserName() }}</span>
        <v-btn icon>
          <v-icon @click="logout()">mdi-export</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { baseRoutes } from "../../router";

export default (Vue as VueConstructor<Vue & { $style }>).extend({
  name: "AppLayout",
  methods: {
    getUserName() {
      return localStorage.getItem("user");
    },

    logout() {
      this.$router.push(baseRoutes.login);
      localStorage.removeItem("user");
    },
  },
});
</script>

<style module>
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
