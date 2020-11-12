<template>
  <div>
    <login-page v-bind="{ login, updateLogin, loginRequest, loginError }" />
    <snackbar
      :open="openSnackbar"
      :message="messageErrorLogin"
      :onClose="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//Api
import { loginRequest } from "../../rest-api/api/login";

//Router
import { baseRoutes } from "../../router";

//Componentes
import LoginPage from "./Page.vue";

import { Snackbar } from "../../common/components/";

//Metodos
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { validation } from "./validations";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage, Snackbar },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      openSnackbar: false,
      messageErrorLogin: "Usuario y contraseña incorrectos.",
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value,
      };

      validation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest() {
      this.openSnackbar = false;
      validation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
              localStorage.setItem("user", this.login.name);
            })
            .catch((error) => {
              this.openSnackbar = true;
            });
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    closeModal() {
      this.openSnackbar = false;
    },
  },
});
</script>
