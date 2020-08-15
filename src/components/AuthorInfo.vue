<template>
  <figure class="author-info-wrapper" :class="layout">
    <p>
      <router-link
        v-if="isLinked"
        :to="{ name: 'author', params: { username: user.username } }"
      >
        <img :src="user.profile_image[avatarSize]" :alt="user.first_name" />
      </router-link>
      <img
        v-else
        :src="user.profile_image[avatarSize]"
        :alt="user.first_name"
      />
    </p>
    <figcaption class="author-details">
      <v-list-item-content>
        <v-list-item-title class="title">
          <router-link
            v-if="isLinked"
            :to="{ name: 'author', params: { username: user.username } }"
          >
            {{ user.name }}
          </router-link>
          <template v-else> {{ user.name }}</template>
        </v-list-item-title>
        <slot></slot>
      </v-list-item-content>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    avatarSize: {
      type: String,
      default: "small"
    },
    layout: {
      type: String,
      default: "horizontal"
    },
    isLinked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.author-info-wrapper {
  display: flex;
  align-items: center;

  &.vertical {
    flex-direction: column;
    text-align: center;

    .author-details {
      margin-left: 0;
    }
  }

  &:not(.vertical) {
    .v-list-item__title {
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #fff;
    }
  }

  img {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(#353535, 50%);
  }
}

.author-details {
  margin-left: 8px;
  color: #eee;
  line-height: 1.5;

  a {
    color: #fff;
  }
}
</style>
