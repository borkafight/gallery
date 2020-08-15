<template>
  <div class="photo">
    <v-img :src="image" />
    <div class="photo-info">
      <AuthorInfo :photo="photo" />
      <Likes :photo="photo" />
    </div>
  </div>
</template>

<script>
import { getPhoto } from "@/services/unsplash";

import AuthorInfo from "@/components/AuthorInfo";
import Likes from "@/components/Likes";

export default {
  data: () => ({
    photo: null
  }),
  mounted() {
    this.getThePhoto();
  },
  components: {
    AuthorInfo,
    Likes
  },
  computed: {
    image() {
      return this.photo ? this.photo.urls.regular : "";
    }
  },
  methods: {
    getThePhoto() {
      const params = {
        id: this.$route.params.id
      };

      getPhoto(params).then(res => {
        this.photo = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.photo {
  position: relative;
}

.v-image {
  height: calc(100vh - 110px);
}

.photo-info {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(#d6d6e0, 40%);
  width: 100%;
  padding: 20px 35px;
}
</style>
