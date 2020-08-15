<template>
  <router-link
    :to="{ name: 'author', params: { id: photo.user.id } }"
    class="router-item"
  >
    <figure class="author-info">
      <p>
        <img
          :src="photo.user.profile_image.small"
          :alt="photo.user.first_name"
        />
      </p>
      <figcaption class="author-name">
        {{ photo.user.first_name }} {{ photo.user.last_name }}
      </figcaption>
    </figure>
  </router-link>
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
a {
  text-decoration: none;
}

.author-info {
  display: flex;
  align-items: center;

  img {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(#353535, 50%);
  }
}

.author-name {
  margin-left: 8px;
  color: #fff;
}
</style>
