<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      isLogin: null,
      token: localStorage.getItem("access_token"),
    };
  },
  components: {
    Navbar,
    RouterView,
  },
  methods: {
    loggedIn: function () {
      this.isLogin = true;
    },
    loggedOut() {
      this.isLogin = false;
    },
  },
  mounted() {
    if (this.token) {
      this.loggedIn();
    }
  },
};
</script>
<template>
  <Navbar v-if="isLogin" @loggedOut="loggedOut"/>
  <RouterView @loggedIn="loggedIn" />
</template>

<style></style>
