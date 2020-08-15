<template>
  <div class="banner-img-wrapper">
    <transition name="slide-fade">
      <v-img :class="{ reduced: expanded }" :src="imageUrl" />
    </transition>
    <v-btn
      class="ma-2 expand-btn"
      outlined
      small
      dark
      fab
      @click="expanded = !expanded"
    >
      <v-icon>
        <template v-if="!expanded">mdi-arrow-down</template>
        <template v-else>mdi-arrow-up</template>
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getRandomPhoto } from "@/services/unsplash.js";

export default {
  data: () => ({
    expanded: false,
    bannerImg: null
  }),
  mounted() {
    this.searchPhoto();
  },
  watch: {
    getCollectionTerm() {
      this.searchPhoto();
    }
  },
  computed: {
    ...mapGetters(["getCollectionTerm"]),
    imageUrl() {
      return this.bannerImg ? this.bannerImg.urls.regular : null;
    }
  },
  methods: {
    searchPhoto() {
      const params = {
        query: this.getCollectionTerm,
        featured: true,
        orientation: "landscape"
      };

      getRandomPhoto(params).then(res => {
        this.bannerImg = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-img-wrapper {
  position: relative;
  text-align: center;

  .v-image {
    height: 30vh;
    background: #222;
    opacity: 0.3;
    transition: height 1.5s cubic-bezier(1, -0.02, 0.76, 0.91),
      opacity 1.5s cubic-bezier(1, -0.02, 0.76, 0.91);

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 20vh;
      left: 0;
      right: 0;
      background: linear-gradient(0deg, rgb(0 0 0 / 60%), transparent);
    }

    &.reduced {
      height: calc(100vh - 110px);
      opacity: 1;
    }
  }

  .expand-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.5;
    transition: opacity 0.3s ease-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
