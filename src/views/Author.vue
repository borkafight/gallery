<template>
  <div v-if="user" class="author-wrapper">
    <div class="author-info">
      <AuthorInfo
        :user="user"
        avatarSize="large"
        layout="vertical"
        :isLinked="false"
      >
        <v-list-item-subtitle>
          {{ user.location }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <br />
          <v-btn :href="user.portfolio_url" outlined color="indigo" dark
            >Portfolio</v-btn
          >
        </v-list-item-subtitle>
      </AuthorInfo>

      <div class="author-achievements">
        <span>
          <v-icon>mdi-image-multiple</v-icon>
          {{ user.total_collections }}
        </span>
        <span>
          <v-icon>mdi-thumb-up</v-icon>
          {{ user.total_likes }}
        </span>
        <span>
          <v-icon>mdi-camera</v-icon>
          {{ user.total_photos }}
        </span>
      </div>
    </div>
    <div class="author-photos">
      <v-img
        v-for="(photo, i) in user.photos"
        :key="i"
        :src="photo.urls.regular"
      />
    </div>
  </div>
</template>

<script>
import { getUser } from "@/services/unsplash";

import AuthorInfo from "@/components/AuthorInfo";

export default {
  data: () => ({
    user: null
  }),
  components: {
    AuthorInfo
  },
  mounted() {
    this.getTheUser();
  },
  methods: {
    getTheUser() {
      const params = {
        username: this.$route.params.username
      };

      getUser(params).then(res => {
        this.user = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: cyan;
}

.author-wrapper {
  position: relative;
}

.author-info {
  position: absolute;
  top: 0;
  left: 50%;
  background: rgba(#000d3a, 78%);
  width: 33.4%;
  padding: 15px;
  transform: translateX(-50%);
  z-index: 1;
}

@media all and (max-width: 1023px) {
  .author-info {
    left: 0;
    width: 100%;
    transform: unset;
    height: 33.33%;
  }
}

.author-details {
  background: #000;
}

.author-achievements {
  display: flex;
  justify-content: center;
  margin: 10px -15px -15px;
  padding: 15px;
  background: rgb(255 255 255 / 0.2);
  color: #fff;

  > span {
    display: flex;
    align-items: center;
    padding: 0 15px;

    > i {
      margin-right: 8px;
      color: #fff;
    }
  }
}

.author-photos {
  display: flex;
  height: calc(100vh - 110px);

  .v-image {
    flex: 1;
  }
}

@media all and (max-width: 1023px) {
  .author-photos {
    flex-direction: column;
  }
}
</style>
