<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  background: #151515;
}

img {
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
