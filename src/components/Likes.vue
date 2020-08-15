<template>
  <div class="photo-likes">
    <v-icon dark>mdi-heart</v-icon>
    <span class="likes-text">{{ photo.likes }}</span>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-likes {
  display: flex;
  align-items: center;

  img {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(#353535, 50%);
  }
}

.likes-text {
  color: #fff;
  padding-left: 5px;
}
</style>
