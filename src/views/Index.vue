<template>
  <div class="content">
    <BannerImage />
    <CategoryList />
  </div>
</template>

<script>
import BannerImage from "@/components/BannerImage";
import CategoryList from "@/components/CategoryList";

export default {
  name: "Index",
  components: {
    BannerImage,
    CategoryList
  }
};
</script>

<style lang="scss" scoped></style>
