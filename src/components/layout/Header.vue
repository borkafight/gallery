<template>
  <v-toolbar fixed height="110px">
    <v-toolbar-title>
      <router-link to="/">
        <v-img src="../../assets/img/logo.png" width="100px" alt="Logo" />
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-tabs v-if="isHome" background-color="deep-purple accent-4" center-active>
      <v-tab
        v-for="({ name, term }, i) in collectionsList"
        :key="i"
        @click="setCollectionTerm(term)"
      >
        {{ name }}
      </v-tab>
    </v-tabs>
    <v-spacer />
    <template v-if="isHome">
      <v-text-field
        hide-details
        single-line
        v-model="searchQuery"
        class="search-input"
      ></v-text-field>
      <v-icon v-if="!searchQuery">mdi-magnify</v-icon>
      <v-icon v-else @click="setSearchQuery('')">mdi-close</v-icon>
    </template>
    <template v-else>
      <span class="go-back">
        <v-btn @click="goBack" text>
          <v-icon left>mdi-arrow-left</v-icon> go back
        </v-btn>
      </span>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    collectionsList: [
      {
        name: "All",
        term: null
      },
      {
        name: "Animals",
        term: "animals"
      },
      {
        name: "Films",
        term: "films"
      },
      {
        name: "Food&Drink",
        term: "food, drink"
      },
      {
        name: "Nature",
        term: "nature"
      }
    ]
  }),
  computed: {
    ...mapGetters(["getSearchQuery"]),
    searchQuery: {
      get() {
        return this.getSearchQuery;
      },
      set(value) {
        this.setSearchQuery(value);
      }
    },
    isHome() {
      return this.$route.name === "home";
    }
  },
  methods: {
    ...mapMutations(["setSearchQuery", "setCollectionTerm"]),
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.v-tabs {
  height: 35px;
  width: 60vw;
}

.search-input {
  max-width: 250px;
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
