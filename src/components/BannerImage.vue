<template>
  <v-img :class="{ reduced: this.$route.name === 'home' }" :src="imageUrl" />
</template>

<script>
import { getRandomPhoto } from "@/services/unsplash.js";

export default {
  data: () => ({
    unsplashData: null
  }),
  mounted() {
    this.searchPhoto();
  },
  computed: {
    imageUrl() {
      return this.unsplashData ? this.unsplashData.urls.regular : null;
    }
  },
  methods: {
    searchPhoto() {
      const params = {
        featured: true,
        orientation: "landscape"
      };

      getRandomPhoto(params).then(res => {
        this.unsplashData = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
