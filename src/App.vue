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

// Fade Animation
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
</style>
