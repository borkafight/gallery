<template>
  <v-toolbar fixed height="110px">
    <v-toolbar-title>
      <router-link to="/">
        <v-img src="../../assets/logo.png" width="100px" alt="Logo" />
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <router-link
      v-for="({ path, name }, i) in navRoutes"
      :key="i"
      :to="path"
      class="router-item"
    >
      <v-btn text>{{ name }}</v-btn>
    </router-link>
    <v-spacer />
    <v-text-field hide-details single-line></v-text-field>
    <v-icon>mdi-magnify</v-icon>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    navRoutes() {
      return this.$router.options.routes.filter((route, i) => i > 0);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.v-toolbar__title {
  min-width: 100px;
}

.router-item {
  border-bottom: solid transparent;
}

.router-link-active {
  border-bottom-color: inherit;

  .v-btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
