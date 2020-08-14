<template>
  <div class="cards-wrapper">
    <transition-group name="slide-fade" tag="ul" class="cards">
      <li v-for="(pic, i) in picsArray" :key="i" class="card">
        <img :src="pic.urls.regular" />
      </li>
    </transition-group>
    <v-btn
      color="blue-grey"
      class="load-more-btn ma-2 white--text"
      @click="initPhotos"
      dark
    >
      Load More
      <v-icon right dark>mdi-cogs</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { listPhotos, searchPhotos } from "@/services/unsplash.js";

export default {
  data: () => ({
    picsArray: [],
    unsplashData: null,
    loadMoreCounter: 1
  }),
  mounted() {
    this.initPhotos();
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  watch: {
    currentRouteName(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.loadMoreCounter = 1;
        this.picsArray.length = 0;
      }

      this.initPhotos();
    }
  },
  methods: {
    getListedPhotos() {
      const params = {
        page: this.loadMoreCounter,
        per_page: 24,
        order_by: "popular"
      };

      listPhotos(params).then(res => {
        this.picsArray.push(...res);
      });
    },
    getSearchedPhotos(routeName) {
      const params = {
        query: routeName,
        page: this.loadMoreCounter,
        per_page: 24,
        order_by: "popular"
      };

      searchPhotos(params).then(res => {
        this.picsArray.push(...res);
      });
    },
    initPhotos() {
      if (this.currentRouteName === "home" || this.currentRouteName === "all") {
        this.getListedPhotos();
      } else {
        this.getSearchedPhotos(this.currentRouteName);
      }

      this.loadMoreCounter += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.cards,
.cards-wrapper {
  margin-bottom: 50px;
}

.cards {
  column-count: 5;
  column-gap: 1px;
  list-style-type: none;

  .card {
    margin-bottom: 1px;

    img {
      display: block;
    }
  }
}

.load-more-btn {
  display: block;
  margin: 0 auto;
}

// Animation
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

// Media
@media all and (max-width: 1280px) {
  .cards {
    column-count: 4;
  }
}

@media all and (max-width: 1024px) {
  .cards {
    column-count: 3;
  }
}

@media all and (max-width: 599px) {
  .cards {
    column-count: 2;
  }
}
</style>
