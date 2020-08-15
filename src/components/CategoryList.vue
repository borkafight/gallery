<template>
  <div class="cards-wrapper">
    <transition-group name="slide-fade" tag="ul" class="cards">
      <li v-for="(photo, i) in photos" :key="i" class="card">
        <router-link
          :to="{ name: 'photo', params: { id: photo.id } }"
          class="router-item"
        >
          <img :src="photo.urls.regular" class="card-img" />
          <div class="info-block">
            <AuthorInfo :photo="photo" />
            <Likes :photo="photo" />
          </div>
        </router-link>
      </li>
    </transition-group>
    <v-btn
      v-if="photos.length"
      color="blue-grey"
      class="load-more-btn ma-2 white--text"
      @click="initPhotos"
      dark
    >
      Load More
      <v-icon right dark>mdi-cogs</v-icon>
    </v-btn>
    <p v-else class="no-img-msg">
      There are no such images. <br />
      Please change your search query.
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { debounce } from "lodash";

import { listPhotos, searchPhotos } from "@/services/unsplash";

import AuthorInfo from "@/components/AuthorInfo";
import Likes from "@/components/Likes";

export default {
  data: () => ({
    photos: [],
    loadMoreCounter: 1
  }),
  components: {
    AuthorInfo,
    Likes
  },
  mounted() {
    this.initPhotos();
  },
  computed: {
    ...mapGetters(["getSearchQuery", "getCollectionTerm"]),
    searchQuery: {
      get() {
        return this.getSearchQuery;
      }
    },
    debouncedSearch() {
      return debounce(() => {
        this.getSearchedPhotos();
      }, 600);
    }
  },
  watch: {
    getCollectionTerm(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.loadMoreCounter = 1;
        this.photos.length = 0;
      }

      this.initPhotos();
    },
    getSearchQuery() {
      if (this.getSearchQuery) {
        this.photos.length = 0;
      }

      this.debouncedSearch();
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
        this.photos.push(...res);
      });
    },
    getSearchedPhotos() {
      const params = {
        query: this.getSearchQuery || this.getCollectionTerm,
        page: this.loadMoreCounter,
        per_page: 24,
        order_by: "popular"
      };

      searchPhotos(params).then(res => {
        this.photos.push(...res);
      });

      this.loadMoreCounter += 1;
    },
    initPhotos() {
      if (this.getCollectionTerm) {
        this.getSearchedPhotos();
      } else {
        this.getListedPhotos();
      }
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
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  list-style-type: none;

  &:hover {
    .card {
      opacity: 0.7;
    }
  }

  .card {
    flex: auto;
    position: relative;
    width: 250px;
    height: 250px;
    min-width: 150px;
    margin: 2px;
    cursor: pointer;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 1;

      .info-block {
        opacity: 1;
        visibility: visible;
      }
    }

    .card-img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .info-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    background: linear-gradient(0deg, rgba(#000, 25%), transparent);
    transition: opacity 0.3s ease-in;
  }
}

.load-more-btn {
  display: block;
  margin: 0 auto;
}

.no-img-msg {
  color: #666;
  text-align: center;
  text-transform: uppercase;
  line-height: 2;
}
</style>
