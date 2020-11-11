<template>
  <div class="text-center ma-2">
    <v-snackbar :value="open" @input="onClose" color="red">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="onClose">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "Snackbar",
  props: {
    open: { required: true } as PropOptions<string>,
    message: { required: true } as PropOptions<string>,
    onClose: { required: true } as PropOptions<() => void>,
  },
});
</script>
