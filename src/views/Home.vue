<template>
  <div id="app">
    <h1>Random "{{ query }}" Unsplash Photo</h1>
    <input
      :disabled="dataLoading"
      v-model="query"
      type="text"
      label="search term"
    />
    <button :disabled="dataLoading" type="button" @click="searchPhoto">
      Search
    </button>
    <br />
    <img :src="imageUrl" />
    <br />
    <span v-html="credits" />
  </div>
</template>

<script>
import { getRandomPhoto } from "@/services/unsplash.js";
export default {
  name: "Home",
  data: () => ({
    query: "mountain",
    dataLoading: false,
    unsplashData: null
  }),
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData.urls.regular;
      return null;
    },
    credits() {
      var html = null;
      if (this.unsplashData) {
        html = "Photo by ";
        html +=
          "<a href='" +
          this.unsplashData.user.links.html +
          "' target='_blank'>";
        html += this.unsplashData.user.name;
        html += "</a>";
        html += " on ";
        html +=
          "<a href='" + this.unsplashData.links.html + "' target='_blank'>";
        html += "Unsplash";
        html += "</a>";
      }
      return html;
    }
  },
  methods: {
    searchPhoto() {
      const param = {
        featured: true,
        query: this.query
      };
      this.dataLoading = true;
      getRandomPhoto(param).then(res => {
        this.unsplashData = res;
        this.dataLoading = false;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
